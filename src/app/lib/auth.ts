import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials"
import { getUser, saveUser } from './db'

function getGoogleCredentials() {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET

  if (!clientId || clientId.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_ID')
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_SECRET')
  }

  return { clientId, clientSecret }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        id: { label: 'Id', type: 'text' },
        username: { label: 'Username', type: 'text' },
        telephone: { label: 'Telephone', type: 'text' },
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log("1: Checking credentials")

        if (!credentials?.email || !credentials?.password) {
          console.log("2: Missing credentials")
          throw new Error('Missing email or password')
        }

        let user = await getUser(credentials.email) as User
        console.log("3: Checking user in IndexedDB")

        if (!user) {
          console.log("4: User not found, creating new user")
          user = {
            id: credentials.id,
            username: credentials.username || '',
            telephone: credentials.telephone || '',
            email: credentials.email,
            password: credentials.password,
          }

          console.log("user", user)

          await saveUser(user)
        }

        if (user.password !== credentials.password) {
          console.log("5: Incorrect password")
          return null
        }

        console.log("6: User authenticated")
        return user
      },
    }),
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.username = user.username
        token.telephone = user.telephone
        token.email = user.email
      }

      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          username: token.username,
          telephone: token.telephone,
          email: token.email,
        }
      }
  
      return session
    },
    redirect() {
      return '/'
    },
  }
}
