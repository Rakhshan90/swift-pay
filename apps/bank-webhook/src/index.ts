import express from 'express';
import db from '@repo/db/client';

const app = express();

app.use(express.json());


app.post('/hdfcWebhook', async(req, res)=>{
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

    const onRampTransection = await db.onRampTransaction.findFirst({
        where: {token: paymentInformation?.token}
    });

    if(onRampTransection?.status === 'Success'){
        return res.status(403).json({message: "On ramp transaction is already completed"});
    }

    try {
        await db.$transaction([
            db.balance.update({
                where: {
                    userId: paymentInformation.userId,
                },
                data: {
                    amount: {
                        increment: paymentInformation.amount
                    }
                }
            }),

            db.onRampTransaction.update({
                where: {
                    token: paymentInformation.token,
                },
                data: {
                    status: 'Success'
                }
            })
        ]);

        return res.json({
            message: "captured"
        });

    } catch (error) {
        return res.status(411).json({
            message: "Error while processing webhook, Unable to captured payment information into our database"
        })
    }
});

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`);
})

