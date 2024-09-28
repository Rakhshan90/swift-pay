import { Button } from "./button";


export const Landing = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex justify-center items-center xl:justify-between px-4">
      {/* item 1 */}
      <div className="flex flex-col items-center space-y-4 text-center mt-24 xl:mt-0">
        <div className="space-y-2">
          <h1 className="text-violet-600 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Welcome to Swift Pay Wallet
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Your all-in-one INR wallet solution for seamless on-ramp, off-ramp, and peer-to-peer transactions.
          </p>
        </div>
        <div className="space-x-4">
          <Button onClick={() => console.log("hi")}>Get Started</Button>
        </div>
      </div>

      {/* item 2 */}
      {children}
    </div>
  );
};
