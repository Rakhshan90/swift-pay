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


const BalanceCard = ({ amount, locked }: { amount: number, locked: number }) => {
    return (
        <Card className='w-80 lg:w-96'>
            <CardHeader>
                <CardTitle className='text-xl border-b-2 pb-2 border-slate-200'>
                    Balance
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className='w-full'>
                    <div className="w-full flex justify-between border-b-2 pb-2 border-slate-200">
                        <Label>Unlocked balance</Label>
                        <Label>{amount / 100} INR</Label>
                    </div>
                    <div className="mt-2 w-full flex justify-between border-b-2 pb-2 border-slate-200">
                        <Label>Total locked balance</Label>
                        <Label>{locked / 100} INR</Label>
                    </div>
                    <div className="mt-2 w-full flex justify-between border-b-2 pb-2 border-slate-200">
                        <Label>Total balance</Label>
                        <Label>{(amount + locked) / 100} INR</Label>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default BalanceCard