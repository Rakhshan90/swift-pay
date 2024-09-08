import { authOptions } from '@/app/config/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

const Home = async () => {

  const session = await getServerSession(authOptions);

  if (!session?.user || !session?.user?.id) {
    redirect('/api/auth/signin');
  }
  return (
    <div>Dashboard</div>
  )
}

export default Home