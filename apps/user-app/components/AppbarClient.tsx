'use client';
import React from 'react';
import Appbar from '@repo/ui/appbar';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Wallet } from 'lucide-react';

const AppbarClient = () => {

    const router = useRouter();
    const session = useSession();
    const authenticated = session.status === 'authenticated';

    const navigateHandler = ()=>{
        if(authenticated){
            router.push('/transfer');
        }
    }

    const landingPage = ()=>{
        router.push('/');
    }

    const wallet = <Wallet className="h-6 w-6" />

    return (
        <Appbar wallet={wallet} authenticated={authenticated} signInHandler={signIn} signOutHandler={signOut} 
        navigateHandler={navigateHandler} landingPage={landingPage} />
    )
}

export default AppbarClient