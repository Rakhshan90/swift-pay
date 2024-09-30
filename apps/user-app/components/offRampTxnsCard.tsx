'use client';

import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from './ui/label'

type offRampStatus = "Success" | "Failure" | "Processing"

const OffRampTxnsCard = ({ transactions }: { transactions: { time: Date, amount: number, status: offRampStatus, provider: string }[] }) => {
    return (
        <Card className='w-80 lg:w-96'>
            <CardHeader>
                <CardTitle className='text-xl border-b-2 pb-2 border-slate-200'>
                    Withdraw transactions    
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className='h-24 w-full overflow-y-auto'>
                    <div className="flex flex-col gap-4 border-b-2 pb-2 pr-2 border-slate-200">
                        {transactions?.map((item, index) => (
                            <div key={index} className='w-full flex justify-between'>
                                <div className="flex flex-col">
                                    <Label>Debited INR</Label>
                                    <div className="text-slate-600 text-xs font-medium">
                                        {item?.time?.toDateString()}
                                    </div>
                                </div>
                                <Label>-Rs {item?.amount / 100} {item?.status}</Label>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default OffRampTxnsCard