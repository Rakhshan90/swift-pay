'use client';

import React from 'react'
import { Button } from './button';

const Appbar = ({ signInHandler, signOutHandler, authenticated }: { signInHandler: () => void, signOutHandler: () => void, authenticated: boolean }) => {
    

    return (
        <div className='p-4 max-w-screen mx-auto px-4 shadow'>
            <div className="w-full flex justify-between items-center">
                <div className="text-xl font-bold text-violet-600">Swift Pay</div>
                <div className="flex gap-4 items-center">
                    <Button onClick={authenticated? signOutHandler : signInHandler}>{authenticated ? "Sign Out" : "Sing In"}</Button>
                </div>
            </div>
        </div>
    )
}

export default Appbar