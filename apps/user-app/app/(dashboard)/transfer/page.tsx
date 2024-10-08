import Heading from '@/components/Heading'
import React from 'react'
import BalanceCard from '@/components/BalanceCard'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/config/authOptions'
import db from '@repo/db/client';
import { redirect } from 'next/navigation'
import { WithdrawCreditTabs } from '@/components/WithdrawCreditTabs'

const getBalance = async () => {
    const session = await getServerSession(authOptions);
    if (!session?.user || !session?.user?.id) {
        return {
            message: "User is not logged in"
        }
    }
    const balance = await db.balance.findFirst({
        where: { userId: Number(session?.user?.id) }
    });

    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    if (!session?.user || !session?.user?.id) {
        return {
            message: "User is not logged in"
        }
    }
    const txns = await db.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

const Transfer = async () => {

    const session = await getServerSession(authOptions);



    const balance = await getBalance();
    const transactions = await getOnRampTransactions();

    // Check if transactions contain a message
    if ('message' in transactions) {
        // Handle the case where the user is not logged in
        return <div>{transactions.message}</div>;
    }

    if (!session?.user || !session?.user?.id) {
        redirect('/api/auth/signin');
    }

    return (
        <div className='px-8 max-w-7xl mx-auto xl:mx-0'>
            <div className="pt-8">
                <Heading text='Transfer' />
            </div>
            <div className="flex flex-wrap gap-4 py-12 justify-center items-center xl:justify-start xl:items-start md:flex-row">
                <WithdrawCreditTabs />
                <BalanceCard amount={balance.amount ?? 0} locked={balance.locked ?? 0} />
            </div>


        </div>
    )
}

export default Transfer