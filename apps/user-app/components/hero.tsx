'use client';

import { Landing } from '@repo/ui/landing'
import React from 'react'
import Image from 'next/image';
import heroImg from '@/assets/hero-image.svg'

const Hero = () => {
    return (
        <Landing>
            <Image src={heroImg} alt='hero image' className='hidden xl:block w-1/2' />
        </Landing>
    )
}

export default Hero