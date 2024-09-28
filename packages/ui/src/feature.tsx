import { ArrowDownUp, ArrowRightLeft, IndianRupee, Wallet } from 'lucide-react';

const features = [
  {
    name: 'On-ramp Transactions',
    desc: 'Easily add funds to your wallet using various payment methods.',
    icon: <ArrowDownUp className="h-12 w-12 mb-4 text-primary" />,
  },
  {
    name: 'Off-ramp Transactions',
    desc: 'Withdraw your funds quickly and securely to your bank account.',
    icon: <ArrowRightLeft className="h-12 w-12 mb-4 text-primary" />,
  },
  {
    name: 'Peer-to-Peer Transactions',
    desc: 'Send and receive money instantly with other wallet users.',
    icon: <IndianRupee className="h-12 w-12 mb-4 text-primary" />,
  },
]

export const Feature = () => {
  return (
    <div className="w-full flex flex-col gap-12 items-center justify-center mt-24">
      <h1 className="text-3xl font-bold text-center">Our Features</h1>

      <div className="w-full flex flex-col gap-8 justify-center items-center px-4 lg:flex-row lg:justify-between">
        {features.map((item, index) => (
          <div key={index} className="max-w-xs flex flex-col gap-4 items-center justify-center">
            {item?.icon}
            <h3 className="text-lg font-bold text-center">{item?.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              {item?.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
