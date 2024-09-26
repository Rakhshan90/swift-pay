import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowDownUp, ArrowRightLeft, IndianRupee, Wallet } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import heroImg from '@/assets/hero-image.svg'


export default async function Page() {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
      <main className="flex-1">
        <section className="w-full pt-4 pb-12">
          <div className="w-full flex gap-4 items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-violet-600 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Welcome to Swift Pay Wallet
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Your all-in-one INR wallet solution for seamless on-ramp, off-ramp, and peer-to-peer transactions.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button className='bg-violet-600'>Get Started</Button>
                  <Button variant="outline" className='bg-gray-200 border border-gray-900'>Learn More</Button>
                </div>
              </div>
            </div>

            <Image src={heroImg} alt='hero image' className='hidden xl:block w-1/2' />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Features
            </h2>
            <div className="w-full">
              <div className="w-full flex gap-4 md:gap-8 lg:gap-12 justify-center items-center">
                <div className="flex flex-col items-center text-center">
                  <ArrowDownUp className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold">On-ramp Transactions</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Easily add funds to your wallet using various payment methods.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <ArrowRightLeft className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold">Off-ramp Transactions</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Withdraw your funds quickly and securely to your bank account.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <IndianRupee className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold">Peer-to-Peer Transfers</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Send and receive money instantly with other wallet users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to get started?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of users who trust My end-to-end Wallet for their INR transactions.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Swift Pay end-to-end Wallet. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
