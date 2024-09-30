import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowDownUp, ArrowRightLeft, IndianRupee, Wallet } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import heroImg from '@/assets/hero-image.svg'
import { Landing } from '@repo/ui/landing';
import Hero from '@/components/hero';
import { Feature } from '@repo/ui/feature';
import { Footer } from '@repo/ui/footer';

export default async function Page() {
  return (
    <div>
      <div className="min-h-screen max-w-7xl mx-auto">
        <Hero />
        <Feature />
      </div>

      <Footer />
    </div>
  )
}
