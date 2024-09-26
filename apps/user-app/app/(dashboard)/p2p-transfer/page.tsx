import React from 'react'
import Heading from '@/components/Heading'
import P2PTransferCard from '@/components/P2PTransferCard'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/config/authOptions';
import { redirect } from 'next/navigation';

const P2PTransfer = async() => {

    const session = await getServerSession(authOptions);

    if (!session?.user || !session?.user?.id) {
        redirect('/api/auth/signin');
    }
    return (
        <div className='px-8 max-w-7xl mx-auto xl:mx-0'>
            <div className="pt-8">
                <Heading text='P2P Transfer' />
            </div>
            <div className="flex gap-4 py-12 items-start">
                {/* <AddMoneyCard /> */}
                <P2PTransferCard />
            </div>


        </div>
    )
}

export default P2PTransfer