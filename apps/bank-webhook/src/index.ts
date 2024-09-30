import express from 'express';
import db from '@repo/db/client';

const app = express();

app.use(express.json());


app.post('/hdfcWebhook', async (req, res) => {
    // Todo: Zod validation
    // Todo: HDFC or any other bank should ideally send us a secret so we know this is sent by the bank

    const paymentInformation: {
        token: string;
        userId: number;
        amount: number;
    } = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount,
    }

    let responseSent = false; // Track if a response is already sent

    try {
        await db.$transaction(async (txn) => {

            await txn.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(paymentInformation.userId)} FOR UPDATE`;

            const onRampTransection = await txn.onRampTransaction.findFirst({
                where: { token: paymentInformation?.token }
            });

            if (onRampTransection?.status === 'Success') {
                responseSent = true;
                return res.status(403).json({ message: "On ramp transaction is already completed" });
            }

            await txn.balance.update({
                where: {
                    userId: paymentInformation.userId,
                },
                data: {
                    amount: {
                        increment: paymentInformation.amount
                    }
                }
            }),

                await txn.$queryRaw`SELECT * FROM "OnRampTransaction" WHERE "userId" = ${Number(paymentInformation.userId)} FOR UPDATE`;

            await txn.onRampTransaction.update({
                where: {
                    token: paymentInformation.token,
                },
                data: {
                    status: 'Success'
                }
            })
        });

        if (!responseSent) { // Only send this if no other response has been sent
            return res.json({ message: "captured" });
        }

    } catch (error) {
        return res.status(500).json({
            message: "Error while processing webhook, Unable to captured payment information into our database"
        })
    }
});

app.post('/hdfcWebhook/withdrawal', async (req, res) => {

    const paymentInformation: {
        token: string;
        userId: number;
        amount: number;
    } = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount,
    }

    let responseSent = false; // Track if a response is already sent

    try {
        await db.$transaction(async (txn) => {


            await txn.$queryRaw`SELECT * FROM "OffRampTransaction" WHERE "userId" = ${Number(paymentInformation.userId)} FOR UPDATE`;

            const offRampTransaction = await txn.offRampTransaction.findFirst({
                where: {
                    token: paymentInformation.token,
                }
            });

            if (offRampTransaction?.status === 'Success') {
                responseSent = true;
                return res.status(403).json({
                    message: 'withdrawal has already been done for this off ramp transaction'
                })
            }

            if (offRampTransaction?.status === 'Failure') {
                responseSent = true;
                return res.status(403).json({
                    message: 'This withdrawal request has been rejected and expired'
                })
            }

            await txn.offRampTransaction.update({
                where: {
                    token: paymentInformation.token,
                },
                data: {
                    status: 'Success',
                }
            });


            await txn.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(paymentInformation.userId)} FOR UPDATE`;

            const balance = await txn.balance.findFirst({
                where: {
                    userId: paymentInformation.userId
                }
            });


            if (balance?.amount && balance?.amount < paymentInformation.amount) {
                await txn.offRampTransaction.update({
                    where: {
                        token: paymentInformation.token,
                    },
                    data: {
                        status: 'Failure',
                    }
                })
                responseSent = true;
                return res.status(403).json({message: "Insufficient balance"});
            }

            await txn.balance.update({
                where: {
                    userId: paymentInformation.userId,
                },
                data: {
                    amount: {
                        decrement: paymentInformation.amount,
                    }
                }
            })
        });

        if (!responseSent) { // Only send this if no other response has been sent
            return res.json({ message: "captured" });
        }

    } catch (error) {
        return res.status(500).json({
            message: "Error while processing webhook, Unable to captured off ramp transaction information into our database",
            error
        });
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})

