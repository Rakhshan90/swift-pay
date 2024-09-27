import {Card} from '../../../apps/user-app/components/ui/card';
import {CardHeader} from '../../../apps/user-app/components/ui/card';
import {CardTitle} from '../../../apps/user-app/components/ui/card';
import {CardContent} from '../../../apps/user-app/components/ui/card';
import {CardFooter} from '../../../apps/user-app/components/ui/card';
import {Label} from '../../../apps/user-app/components/ui/label';
import {Input} from '../../../apps/user-app/components/ui/input';
import {Select} from '../../../apps/user-app/components/ui/select';
import {SelectContent} from '../../../apps/user-app/components/ui/select';
import {SelectItem} from '../../../apps/user-app/components/ui/select';
import {SelectTrigger} from '../../../apps/user-app/components/ui/select';
import {SelectValue} from '../../../apps/user-app/components/ui/select';
import {Button} from '../../../apps/user-app/components/ui/button';

interface Bank{
  name: string, 
  redirectUrl: string
}

export const Withdraw = ({ children, handleAmountChange, handleBankChange, SUPPORTED_BANKS, clickHandler }: { children: string, handleAmountChange: (value: number)=> void, handleBankChange: (value: string)=> void, SUPPORTED_BANKS: Bank[], clickHandler: ()=>void }) => {

  return (
    <Card className='w-80 lg:w-96'>
      <CardHeader>
        <CardTitle className='text-xl border-b-2 pb-2 border-slate-200'>{children}</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <div className="flex flex-col gap-2">
          <Label>Amount</Label>
          <Input
            type='number'
            className=''
            placeholder='Enter amount'
            onChange={(e)=> handleAmountChange(Number(e.target.value))} />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Bank</Label>
          <Select onValueChange={handleBankChange}>
            <SelectTrigger className="">
              <SelectValue placeholder="HDFC Bank" />
            </SelectTrigger>
            <SelectContent>
              {SUPPORTED_BANKS?.map((item, index) => (
                <SelectItem key={index} value={index.toString()}>
                  {item?.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className='flex items-center justify-center'>
        <Button onClick={clickHandler} className='bg-violet-600'>{children}</Button>
      </CardFooter>
    </Card>
  );
};
