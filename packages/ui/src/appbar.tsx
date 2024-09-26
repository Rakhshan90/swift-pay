'use client';

import React from 'react'
import { Button } from './button';


const Appbar = ({ signInHandler, signOutHandler, authenticated, navigateHandler, landingPage, wallet }: { signInHandler: () => void, signOutHandler: () => void, authenticated: boolean, navigateHandler: () => void, landingPage: () => void, wallet: React.ReactNode }) => {


    return (
        <div className='py-4 px-2 md:p-4 max-w-screen mx-auto border-b-2 border-slate-200'>
            <div className="w-full flex justify-between items-center">
                <button className='flex gap-1 items-center text-xl font-bold text-violet-600 ml-12 xl:ml-0' 
                        onClick={landingPage}>
                    <span>
                        {wallet}
                    </span>
                    <span>Swift Pay</span>
                </button>
                <div className="flex gap-2 md:gap-4 items-center">
                    {authenticated ? (
                        <Button onClick={navigateHandler}>Dashboard</Button>
                    ) : null}
                    <Button onClick={authenticated ? signOutHandler : signInHandler}>{authenticated ? "Sign Out" : "Sing In"}</Button>
                </div>
            </div>
        </div>
    )
}

export default Appbar