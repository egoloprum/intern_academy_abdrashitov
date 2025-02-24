import { authOptions } from '@/app/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { StorageWidget } from '@/widgets/storageSide'
import Sidebar from '@/widgets/sidebar/sidebar.component'

export default async function Home() {
  const session = await getServerSession(authOptions)

  console.log(session?.user)
  
  if (!session) {
    redirect('/login')
  }

  return (
    <main className='main-container'>
      <Sidebar />
      <StorageWidget />
    </main> 
  )
}
