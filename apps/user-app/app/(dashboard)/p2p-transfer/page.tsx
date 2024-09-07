import React from 'react'
import Heading from '@/components/Heading'
import P2PTransferCard from '@/components/P2PTransferCard'

const P2PTransfer = () => {
    return (
        <div className='px-8'>
            <div className="pt-8">
                <Heading text='Transfer money to your friend' />
            </div>
            <div className="flex gap-4 py-12 items-start">
                {/* <AddMoneyCard /> */}
                <P2PTransferCard />
            </div>


        </div>
    )
}

export default P2PTransfer