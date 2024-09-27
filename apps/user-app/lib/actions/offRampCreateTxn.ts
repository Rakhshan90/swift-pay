'use server';


import { authOptions } from '@/app/config/authOptions';
import db from '@repo/db/client';
import { getServerSession } from 'next-auth';

export const offRampCreateTxn = async (amount: number, provider: string)=>{

    const token = Math.random().toString();
    console.log(token); 

    const session = await getServerSession(authOptions);
    if(!session?.user || !session?.user?.id){
        return {
            message: 'User is not logged in',
        }
    }

    try {
        await db.offRampTransaction.create({
            data: {
                token,
                amount,
                provider,
                status: 'Processing',
                startTime: new Date(),
                userId: Number(session?.user?.id),
            }
        });

        return {
            message: 'withdrawal request is in progress',
        }
    } catch (error) {
        return {
            message: 'Something went wrong in withdrawal request'
        }
    }
}