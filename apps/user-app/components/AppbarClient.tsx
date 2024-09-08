'use client';
import React from 'react';
import Appbar from '@repo/ui/appbar';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AppbarClient = () => {

    const router = useRouter();
    const session = useSession();
    const authenticated = session.status === 'authenticated';

    const navigateHandler = ()=>{
        if(authenticated){
            router.push('/dashboard');
        }
    }

    const landingPage = ()=>{
        router.push('/');
    }

    return (
        <Appbar authenticated={authenticated} signInHandler={signIn} signOutHandler={signOut} 
        navigateHandler={navigateHandler} landingPage={landingPage} />
    )
}

export default AppbarClient