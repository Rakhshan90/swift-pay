'use client';
import React from 'react';
import Appbar from '@repo/ui/appbar';
import { signIn, signOut, useSession } from 'next-auth/react';

const AppbarClient = () => {

    const session = useSession();
    const authenticated = session.status === 'authenticated';

    return (
        <Appbar authenticated={authenticated} signInHandler={signIn} signOutHandler={signOut} />
    )
}

export default AppbarClient