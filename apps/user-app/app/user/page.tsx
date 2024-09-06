'use client';

import React from 'react'
import { useBalance } from '@repo/store/useBalance';
import Appbar from '@repo/ui/appbar';
import { signIn, signOut, useSession } from 'next-auth/react';


const User = () => {

    const balance = useBalance();

    const session = useSession();

    return (
        <div>
            <div className="my-4 px-4">
                Balance: {balance}
            </div>
        </div>
    )
}

export default User