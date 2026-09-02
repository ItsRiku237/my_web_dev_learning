"use client"
import { useSession, signIn, signOut } from "next-auth/react"

// npm i next-auth
// https://next-auth.js.org/


export default function Component() {
  const { data: session } = useSession()
  console.log(session)
  if (session) {
    return <>
      Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br />
    <button onClick={() => signIn()}>Sign in</button>
    <button onClick={() => signIn("google")}>Login with Google</button>
  </>
}