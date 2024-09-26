'use client';

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from './ui/label'

type onRampStatus = "Success" | "Failure" | "Processing"

const OnRampTxnsCard = ({ transactions }: { transactions: { time: Date, amount: number, status: onRampStatus, provider: string }[] }) => {
    return (
        <Card className='w-80 lg:w-96'>
            <CardHeader>
                <CardTitle className='text-xl border-b-2 pb-2 border-slate-200'>Recent Transactions</CardTitle>
            </CardHeader>

            <CardContent>
                <div className='w-full'>
                    <div className="flex flex-col gap-4 border-b-2 pb-2 border-slate-200">
                        {transactions?.map((item, index) => (
                            <div className='w-full flex justify-between'>
                                <div className="flex flex-col">
                                    <Label>Recieved INR</Label>
                                    <div className="text-slate-600 text-xs font-medium">
                                        {item?.time?.toDateString()}
                                    </div>
                                </div>
                                <Label>+Rs {item?.amount / 100} {item?.status}</Label>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default OnRampTxnsCard