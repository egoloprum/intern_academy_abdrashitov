import { authOptions } from '@/app/lib/auth'
import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    return (
      <div>go login</div>
    )
  }

  return (
    <div>
      home
    </div> 
  )
}
