'use client';

import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from './ui/button'

const P2PTransferCard = () => {

    const [number, setNumber] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);

    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-xl border-b-2 pb-2 border-slate-200'>Send money</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <div className="flex flex-col gap-2">
                    <Label>Number</Label>
                    <Input
                        type='number'
                        className='w-[30rem]'
                        placeholder='Enter phone number'
                        onChange={(e) => setNumber(Number(e.target.value))} />
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Amount</Label>
                    <Input
                        type='number'
                        className='w-[30rem]'
                        placeholder='Enter amount'
                        onChange={(e) => setAmount(Number(e.target.value))} />
                </div>
            </CardContent>
            <CardFooter className='flex items-center justify-center'>
                <Button onClick={()=> console.log({
                    amount, number
                })} className='bg-violet-600'>Send money</Button>
            </CardFooter>
        </Card>
    )
}

export default P2PTransferCard