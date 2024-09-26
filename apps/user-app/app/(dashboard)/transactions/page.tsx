import Heading from '@/components/Heading';
import React from 'react';
import db from '@repo/db/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/config/authOptions';
import SendTransactionsCard from '@/components/SendTransactionsCard';
import RecievedTxnsCard from '@/components/RecievedTxnsCard';
import { redirect } from 'next/navigation';


const getSendTxns = async () => {
  const session = await getServerSession(authOptions);
  const sendTxns = await db.p2pTransfer.findMany({
    where: { fromUserId: Number(session?.user?.id) },
    select: {
      amount: true,
      timestamp: true,
    }
  });

  return sendTxns;
}

const getRecievedTxns = async () => {
  const session = await getServerSession(authOptions);
  const recievedTxns = await db.p2pTransfer.findMany({
    where: { toUserId: Number(session?.user?.id) },
    select: {
      amount: true,
      timestamp: true,
    }
  });

  return recievedTxns;
}

const Transactions = async () => {

  const sendTxns = await getSendTxns();
  const recievedTxns = await getRecievedTxns();


  const session = await getServerSession(authOptions);

  if (!session?.user || !session?.user?.id) {
    redirect('/api/auth/signin');
  }

  return (
    <div className='px-8 max-w-7xl mx-auto xl:mx-0'>
      <div className="pt-8">
        <Heading text='P2P transactions' />
      </div>
      <div className="flex flex-col gap-4 py-12 items-start md:flex-row">
        {/* <AddMoneyCard /> */}
        <SendTransactionsCard sendTxns={sendTxns} />
        <RecievedTxnsCard recievedTxns={recievedTxns} />
      </div>


    </div>
  )
}

export default Transactions