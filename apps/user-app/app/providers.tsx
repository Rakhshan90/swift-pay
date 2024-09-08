'use client';

import React, { Children } from 'react'
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react"


export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  )
}

export const NextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
