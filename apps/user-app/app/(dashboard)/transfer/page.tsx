import Heading from '@/components/Heading'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Transfer = () => {
    return (
        <div className='px-8'>
            <div className="pt-8">
                <Heading text='Transfer' />
            </div>
            <div className="flex gap-4 py-12 items-start">
                <Card>
                    <CardHeader>
                        <CardTitle className='text-xl border-b-2 pb-2 border-slate-200'>Add Money</CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-4'>
                        <div className="flex flex-col gap-2">
                            <Label>Amount</Label>
                            <Input className='w-[30rem]' placeholder='Enter amount' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Bank</Label>
                            <Select>
                                <SelectTrigger className="w-[30rem]">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">HDFC</SelectItem>
                                    <SelectItem value="dark">SBI</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                    <CardFooter className='flex items-center justify-center'>
                        <Button className='bg-violet-600'>Add money</Button>
                    </CardFooter>
                </Card>

                <div className="flex flex-col gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-xl border-b-2 pb-2 border-slate-200'>Balance</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className='w-[30rem]'>
                                <div className="w-full flex justify-between border-b-2 pb-2 border-slate-200">
                                    <Label>Unlocked balance</Label>
                                    <Label>200 INR</Label>
                                </div>
                                <div className="mt-2 w-full flex justify-between border-b-2 pb-2 border-slate-200">
                                    <Label>Total locked balance</Label>
                                    <Label>0 INR</Label>
                                </div>
                                <div className="mt-2 w-full flex justify-between border-b-2 pb-2 border-slate-200">
                                    <Label>Total balance</Label>
                                    <Label>200 INR</Label>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className='text-xl border-b-2 pb-2 border-slate-200'>Recent Transactions</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className='w-[30rem]'>
                                <div className="w-full flex justify-between items-center border-b-2 pb-2 border-slate-200">
                                    <div className="flex flex-col gap-2">
                                        <Label>Recieved INR</Label>
                                        <div className="text-slate-600 text-xs font-medium">Sat Mar 30 2024</div>
                                    </div>
                                    <Label>+Rs 200</Label>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>


        </div>
    )
}

export default Transfer