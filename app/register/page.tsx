import { authOptions } from "@/app/lib/auth";
import { Register } from "@/pages/register"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async ({}) => {
  const session = await getServerSession(authOptions)
  console.log(session)
  
  if (session) {
    redirect('/')
  }

  return (
    <Register />
  )
}

export default page
