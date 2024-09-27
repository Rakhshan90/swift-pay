'use client';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import AddMoneyCard from "./AddMoneyCard"
import { Withdraw } from '@repo/ui/withdraw'
import { useState } from "react"
import { offRampCreateTxn } from "@/lib/actions/offRampCreateTxn";


const SUPPORTED_BANKS = [{
  name: "HDFC Bank",
  redirectUrl: "https://netbanking.hdfcbank.com"
}, {
  name: "Axis Bank",
  redirectUrl: "https://www.axisbank.com/"
}];

export function WithdrawCreditTabs() {

  const [amount, setAmount] = useState<number>(0);
  const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || '');

  const handleBankChange = (value: string) => {
    const selectedBank = SUPPORTED_BANKS[parseInt(value)];
    setProvider(selectedBank?.name || '');
    setRedirectUrl(selectedBank?.redirectUrl);
  };

  const handleAmountChange = (value: number) => {
    setAmount(value);
  }

  return (
    <Tabs defaultValue="add-money" className="w-80 lg:w-96">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="add-money">Add Money</TabsTrigger>
        <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
      </TabsList>
      <TabsContent value="add-money">
        <AddMoneyCard />
      </TabsContent>
      <TabsContent value="withdraw">
        <Withdraw clickHandler={async () => {
          await offRampCreateTxn(amount * 100, provider)
          window.location.href = redirectUrl || "";
        }} handleAmountChange={handleAmountChange} handleBankChange={handleBankChange} SUPPORTED_BANKS={SUPPORTED_BANKS} children={'Withdraw'} />
      </TabsContent>
    </Tabs>
  )
}
