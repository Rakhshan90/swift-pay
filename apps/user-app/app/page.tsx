import React from 'react'
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
