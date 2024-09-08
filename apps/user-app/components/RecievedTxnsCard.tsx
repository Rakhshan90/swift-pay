'use client';

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'

const RecievedTxnsCard = ({ recievedTxns }: { recievedTxns: { amount: number, timestamp: Date }[] }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-xl border-b-2 pb-2 border-slate-200'>
                    Recieved Transactions
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className='w-[30rem]'>
                    <div className="flex flex-col gap-4 border-b-2 pb-2 border-slate-200">
                        {recievedTxns?.map((item, index) => (
                            <div key={index} className='w-full flex justify-between'>
                                <div className="flex flex-col">
                                    <Label>Recieved INR</Label>
                                    <div className="text-slate-600 text-xs font-medium">
                                        {item?.timestamp?.toDateString()}
                                    </div>
                                </div>
                                <Label>+Rs {item?.amount / 100}</Label>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default RecievedTxnsCard