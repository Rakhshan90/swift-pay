'use client';

import React from 'react'
import { Button } from './button';


const Appbar = ({ signInHandler, signOutHandler, authenticated, navigateHandler, landingPage }: { signInHandler: () => void, signOutHandler: () => void, authenticated: boolean, navigateHandler: ()=> void, landingPage: ()=> void }) => {
    

    return (
        <div className='p-4 max-w-screen mx-auto px-4 border-b-2 border-slate-200'>
            <div className="w-full flex justify-between items-center">
                <button onClick={landingPage} className="text-xl font-bold text-violet-600">Swift Pay</button>
                <div className="flex gap-4 items-center">
                    {authenticated ? (
                        <Button onClick={navigateHandler}>Dashboard</Button>
                    ) : null}
                    <Button onClick={authenticated? signOutHandler : signInHandler}>{authenticated ? "Sign Out" : "Sing In"}</Button>
                </div>
            </div>
        </div>
    )
}

export default Appbar