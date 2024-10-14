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

const Transfer = async () => {

    const session = await getServerSession(authOptions);
    if (!session?.user || !session?.user?.id) {
        redirect('/api/auth/signin');
    }
    const balance = await getBalance();

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