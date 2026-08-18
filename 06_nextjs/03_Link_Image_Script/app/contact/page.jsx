import React from 'react'
import Script from 'next/script'

// Link script: https://nextjs.org/docs/app/api-reference/components/script

const contact = () => {
  return (
    <div>
        <Script>
            {`alert("Welcome to contact page");`}
        </Script>
        This is Contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact Facebook - connect with the world",
  description: "This is a page where we can Contact Facebook and connectwith the world using facebook.",
};