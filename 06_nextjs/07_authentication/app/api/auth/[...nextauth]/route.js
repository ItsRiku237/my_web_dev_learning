import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import EmailProvider from 'next-auth/providers/email'

const handler = NextAuth({
  providers: [
    // github/setting/Developer Settings/OAuth Apps/new OAuth Apps/
    // Homepage URL:http://localhost:3000/
    // Authorization callback URL:http://localhost:3000/api/auth/callback/github
    // Then register -> client ID and client secrets generate (copy paste to .env.local)
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // https://console.cloud.google.com/
    // Create a New Project ->OAuth Consent Screen-> Choose User Type (External) -> Fill App Information
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),

    // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),

    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),

    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ]
})

export { handler as GET, handler as POST };