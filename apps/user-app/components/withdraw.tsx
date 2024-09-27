// 'use client';

// import React, { useState } from 'react'
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Button } from './ui/button'
// import { onRampCreateTxn } from '@/lib/actions/onRampCreateTxn';
// import { createOffRampTxn } from '@/lib/actions/offRampCreateTxn';


// const SUPPORTED_BANKS = [{
//     name: "HDFC Bank",
//     redirectUrl: "https://netbanking.hdfcbank.com"
// }, {
//     name: "Axis Bank",
//     redirectUrl: "https://www.axisbank.com/"
// }];

// const WithdrawMoney = () => {

//     const [amount, setAmount] = useState<number>(0);
//     const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
//     const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || '');

//     const handleBankChange = (value: string) => {
//         const selectedBank = SUPPORTED_BANKS[parseInt(value)];
//         setProvider(selectedBank?.name || '');
//         setRedirectUrl(selectedBank?.redirectUrl);
//     };

//     return (
//         <Card className='w-80 lg:w-96'>
//             <CardHeader>
//                 <CardTitle className='text-xl border-b-2 pb-2 border-slate-200'>Withdraw</CardTitle>
//             </CardHeader>
//             <CardContent className='flex flex-col gap-4'>
//                 <div className="flex flex-col gap-2">
//                     <Label>Amount</Label>
//                     <Input
//                         type='number'
//                         className=''
//                         placeholder='Enter amount'
//                         onChange={(e) => setAmount(Number(e.target.value))} />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                     <Label>Bank</Label>
//                     <Select onValueChange={handleBankChange}>
//                         <SelectTrigger className="">
//                             <SelectValue placeholder="HDFC Bank" />
//                         </SelectTrigger>
//                         <SelectContent>
//                             {SUPPORTED_BANKS?.map((item, index) => (
//                                 <SelectItem key={index} value={index.toString()}>
//                                     {item?.name}
//                                 </SelectItem>
//                             ))}
//                         </SelectContent>
//                     </Select>
//                 </div>
//             </CardContent>
//             <CardFooter className='flex items-center justify-center'>
//                 <Button onClick={async () => {
//                     // await createOffRampTxn(amount * 100, provider)
//                     // window.location.href = redirectUrl || "";
//                     console.log({amount, provider, redirectUrl});
//                 }} className='bg-violet-600'>Withdraw</Button>
//             </CardFooter>
//         </Card>
//     )
// }

// export default WithdrawMoney