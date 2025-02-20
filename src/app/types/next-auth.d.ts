/* eslint-disable */

import type { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
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

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    username: string
    telephone: string
    email: string
  }
}
