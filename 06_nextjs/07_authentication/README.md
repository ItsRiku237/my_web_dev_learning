# 🚀 08_NextJS_Authentication_Part1.md

> **Next.js 14 Authentication (NextAuth.js)**
>
> Beginner → Intermediate | Short but Detailed Revision Notes


> npm i next-auth
> Link for nextauth docs : https://next-auth.js.org/

---

# 📚 Contents

1. What is Authentication?
2. Authentication vs Authorization
3. Why Authentication?
4. Types of Authentication
5. What is OAuth?
6. Session & JWT
7. NextAuth.js (Auth.js)
8. Real Flipkart Login Flow
9. Folder Structure
10. Flow Diagram
11. Code Analysis
12. Best Practices
13. Interview Questions
14. Revision Cheat Sheet

---

# 1. What is Authentication?

Authentication means

> **"Who are you?"**

It verifies the user's identity.

Example

```
Email

Password

↓

Verify

↓

Login Successful
```

Examples

- Google Login
- GitHub Login
- Facebook Login
- Email & Password
- OTP Login

---

# 2. Authentication vs Authorization

## Authentication

Checks

```
Who are you?
```

Example

```
Login
```

---

## Authorization

Checks

```
What are you allowed to access?
```

Example

```
Admin Dashboard

↓

Admin?

↓

Yes

↓

Allow

No

↓

Access Denied
```

---

## Difference

| Authentication | Authorization |
|---------------|---------------|
| Verify User | Verify Permission |
| Login | Access Control |
| First Step | Second Step |

---

# 3. Why Authentication?

Without authentication

❌ Anyone can

- Buy products
- View orders
- Change profile
- Delete data

Authentication prevents this.

---

# 4. Types of Authentication

## Email + Password

```
Email

Password

↓

Database

↓

Login
```

---

## OAuth Login

Examples

```
Google

GitHub

Facebook

Apple
```

No password required.

---

## OTP Login

```
Phone

↓

OTP

↓

Login
```

---

## Magic Link

```
Email

↓

Link

↓

Login
```

---

# 5. What is OAuth?

OAuth means

> Login using another trusted company.

Example

```
Click

Login with Google

↓

Google asks permission

↓

User Allows

↓

Google sends user info

↓

Your App logs user in
```

You never receive the user's password.

---

# 6. Session & JWT

## Session

After login

Server creates

```
Session

↓

Cookie

↓

Browser
```

Browser sends cookie on every request.

Example

```
User logs in

↓

Session Created

↓

Visit Profile

↓

Already Logged In
```

---

## JWT

JWT = JSON Web Token

Server sends token

```
xxxxx.yyyyy.zzzzz
```

Stored in

- Cookie
- localStorage (not recommended)

Every request

↓

Token sent

↓

Server verifies

---

## Difference

| Session | JWT |
|----------|-----|
| Stored on Server | Stored in Token |
| Cookie | Token |
| Easier to Revoke | Faster |

---

# 7. What is NextAuth.js?

NextAuth.js (now called **Auth.js**) is an authentication library for Next.js.

It provides

✅ Login

✅ Logout

✅ Session

✅ Google Login

✅ GitHub Login

✅ Facebook Login

✅ JWT

✅ OAuth

without building everything manually.

Install

```bash
npm i next-auth
```

---

# 8. Real Flipkart Example

Without Login

```
Home

Products

Search

```

User clicks

```
My Orders
```

↓

Redirect

```
Login Page
```

---

User clicks

```
Continue with Google
```

↓

Google Login

↓

Google verifies

↓

Returns

```
Name

Email

Profile Picture
```

↓

Flipkart saves user

↓

Creates Session

↓

Redirects

```
Home Page
```

Now

```
Orders

Wishlist

Cart

Profile

```

are accessible.

---

# 9. Folder Structure

```
app/

├── page.jsx

├── layout.jsx

├── api/

│      auth/

│          [...nextauth]/

│               route.js

│

├── profile/

│      page.jsx

│

component/

│

SessionWrapper.jsx

```

---

# 10. Authentication Flow

```
User

↓

Click Login

↓

Google

↓

Verify User

↓

NextAuth

↓

Create Session

↓

Cookie

↓

Browser

↓

useSession()

↓

Logged In
```

---

# 11. Analysis of Your Code

---

## page.js

```jsx
"use client"
```

Reason

Needs

- useSession()
- Button Click
- signIn()
- signOut()

---

```jsx
useSession()
```

Returns

```js
session
```

If logged in

```
session.user.name

session.user.email

session.user.image
```

---

```jsx
const {data:session}
```

Means

```
Current Login Information
```

---

```jsx
if(session)
```

Checks

```
User Logged In?

↓

Yes

↓

Show User Info

No

↓

Show Login Button
```

---

```jsx
signIn()
```

Opens

Default Login Page.

---

```jsx
signIn("google")
```

Directly opens

Google Login.

---

```jsx
signOut()
```

Deletes

Session

↓

Logs user out.

---

# SessionWrapper

```jsx
<SessionProvider>
```

Provides

```
Session

↓

Entire App
```

Without this

```
useSession()

❌ Doesn't Work
```

Think of it as

```
Wi-Fi Router

↓

Every Device gets Internet

```

SessionProvider

↓

Every Component gets Session.

---

# layout.js

```jsx
<SessionWrapper>

{children}

</SessionWrapper>
```

Makes session available

Everywhere.

Example

```
Home

Profile

Dashboard

Navbar
```

All can use

```jsx
useSession()
```

---

# route.js

```jsx
NextAuth({

providers:[...]

})
```

Creates

Authentication Server.

---

## GithubProvider

```jsx
GithubProvider({

clientId,

clientSecret

})
```

Uses

GitHub OAuth.

---

## GoogleProvider

```jsx
GoogleProvider({

clientId,

clientSecret

})
```

Uses

Google OAuth.

---

Where do these values come from?

```
.env.local
```

Example

```env
GITHUB_ID=xxxxxxxx

GITHUB_SECRET=xxxxxxxx

GOOGLE_ID=xxxxxxxx

GOOGLE_SECRET=xxxxxxxx
```

Never expose these values.

---

```jsx
export{

handler as GET,

handler as POST

}
```

Allows

```
GET

POST
```

requests for authentication.

---

# Complete Flow

```
User

↓

Click Login

↓

signIn("google")

↓

Google Login Page

↓

User Selects Account

↓

Google Verifies

↓

NextAuth

↓

Creates Session

↓

SessionProvider

↓

useSession()

↓

Show User Details
```

---

# 12. Best Practices

✅ Store secrets in `.env.local`

✅ Wrap app with `SessionProvider`

✅ Use `useSession()` only in Client Components

✅ Never expose Client Secret

✅ Protect private pages

---

# 13. Interview Questions

### What is Authentication?

Verifying user identity.

---

### What is Authorization?

Checking user permissions.

---

### What is OAuth?

Login using another provider like Google or GitHub.

---

### Why SessionProvider?

Provides session data to the entire app.

---

### What does `useSession()` return?

Current logged-in user information.

---

### What does `signIn()` do?

Starts login process.

---

### What does `signOut()` do?

Logs out the current user.

---

### Why `.env.local`?

Stores secret credentials safely.

---

# 14. Revision Cheat Sheet

## Login Flow

```
User

↓

signIn()

↓

Google

↓

Verify

↓

NextAuth

↓

Session

↓

SessionProvider

↓

useSession()

↓

Logged In
```

---

## Components

| Function | Purpose |
|----------|----------|
| `useSession()` | Get Logged-in User |
| `signIn()` | Login |
| `signOut()` | Logout |
| `SessionProvider` | Provide Session |
| `NextAuth()` | Configure Authentication |
| `GithubProvider` | GitHub Login |
| `GoogleProvider` | Google Login |

---

# 🎯 30-Second Revision

```
Authentication

↓

Who are you?

↓

OAuth

↓

Google Login

↓

NextAuth

↓

Session Created

↓

SessionProvider

↓

useSession()

↓

User Data Available

↓

Logout

↓

signOut()
```

---

# 💡 Easy Memory Trick

```
Frontend

↓

signIn()

↓

Google / GitHub

↓

NextAuth

↓

Session

↓

Cookie

↓

Browser

↓

useSession()

↓

User Logged In
```

**Rule to Remember:**

- `useSession()` → Read current user
- `signIn()` → Login
- `signOut()` → Logout
- `SessionProvider` → Makes session available everywhere
- `route.js` → Authentication backend
- `.env.local` → Store OAuth secrets safely



```
Step 1: Go to Google Cloud Console

Open:

https://console.cloud.google.com/

Log in with your Google account.

Step 2: Create a New Project

Click the project dropdown at the top.

Select Project
      ↓
New Project

Example

Project Name

NextAuth Google Login

Click

Create

Wait a few seconds.

Step 3: Select Your Project

Choose the project you just created.

Step 4: Configure OAuth Consent Screen

On the left sidebar

APIs & Services
        ↓
OAuth consent screen
Choose User Type

For learning:

External

Click

Create
Step 5: Fill App Information

Example

App Name

NextAuth Demo

Developer Email

your@gmail.com

Support Email

your@gmail.com

Click

Save and Continue
Step 6: Scopes

Don't change anything.

Click

Save and Continue
Step 7: Test Users

Click

Add Users

Add your Gmail.

Example

your@gmail.com

Click

Save
Step 8: Create OAuth Client

Go to

APIs & Services

↓

Credentials

Click

+ Create Credentials

Choose

OAuth Client ID
Step 9: Choose Application Type

Select

Web Application
Step 10: Give a Name

Example

NextAuth Google
Step 11: Authorized JavaScript Origins

Click

Add URI

Add

http://localhost:3000
Step 12: Authorized Redirect URIs

Click

Add URI

Add

http://localhost:3000/api/auth/callback/google

This is very important.

It must be exactly:

http://localhost:3000/api/auth/callback/google
Step 13: Click Create

Google will show

Client ID

xxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com

and

Client Secret

GOCSPX-xxxxxxxxxxxxxxxxxxxx
Step 14: Copy Them

Example

Client ID

1234567890-abcdef.apps.googleusercontent.com

↓

This becomes

GOOGLE_ID=1234567890-abcdef.apps.googleusercontent.com

Example

Client Secret

GOCSPX-abcdef123456

↓

This becomes

GOOGLE_SECRET=GOCSPX-abcdef123456
Step 15: Update .env.local
GITHUB_ID=xxxxxxxx
GITHUB_SECRET=xxxxxxxx

GOOGLE_ID=xxxxxxxx.apps.googleusercontent.com
GOOGLE_SECRET=GOCSPX-xxxxxxxx

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret
```