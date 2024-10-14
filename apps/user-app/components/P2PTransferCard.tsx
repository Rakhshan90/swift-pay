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
import { p2pTransfer } from '@/lib/actions/p2pTransfer';
import CircularRingLoader from './ui/circular-ring-loader';
import { useToast } from '@/hooks/use-toast';

const P2PTransferCard = () => {

    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState<number>(0);
    const [loading, setLoading] = useState<Boolean>(false);
    const {toast} = useToast();

    const clickHandler = async () => {
        try {
            setLoading(true);
            const res = await p2pTransfer(number, amount * 100)
            setLoading(false);
            toast({
                title: 'Response',
                description: res.message
            });
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to transfer, try again'
            })
        }
    }

    return (
        <Card className='w-80 lg:w-96'>
            <CardHeader>
                <CardTitle className='text-xl border-b-2 pb-2 border-slate-200'>
                    Send money 
                </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <div className="flex flex-col gap-2">
                    <Label>Number</Label>
                    <Input
                        type='string'
                        placeholder='Enter phone number'
                        onChange={(e) => setNumber(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Amount</Label>
                    <Input
                        type='number'
                        placeholder='Enter amount'
                        onChange={(e) => setAmount(Number(e.target.value))} />
                </div>
            </CardContent>
            <CardFooter className='flex items-center justify-center'>
                <Button onClick={clickHandler} className='bg-violet-600'>
                    {loading? 'Processing...' : 'Send money'}
                    {loading && <CircularRingLoader className='w-4 h-4 ml-2' />}
                </Button>
            </CardFooter>
        </Card>
    )
}

export default P2PTransferCard