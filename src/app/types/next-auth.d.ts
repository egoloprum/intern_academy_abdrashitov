/* eslint-disable */

import type { Session } from "next-auth"
import type { JWT } from "next-auth/jwt"

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    username: string
    telephone: string
    email: string
  }
}

declare module 'next-auth' {
  interface User {
    id: string
    username: string
    telephone: string
    email: string
  }

  interface Session {
    user: User
  }
}
