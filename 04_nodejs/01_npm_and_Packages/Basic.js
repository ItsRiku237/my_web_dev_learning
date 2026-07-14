//https://nodejs.org/learn/getting-started/how-much-javascript-do-you-need-to-know-to-use-nodejs
/*
Think of Node.js like building a house:

Node.js = House

npm = Market

Package = Tools

node_modules = Store Room

package.json = House Plan

package-lock.json = Exact Materials List



1. npm (Node Package Manager)
It comes automatically when you install Node.js.
Check version:
node -v
npm -v


npm init
npm init -y ( Shortcut version, Without question)

Used to create: package.json file.
when u run : Node asks questions:
Package name: my-app
Version: 1.0.0
Description: Learning Node.js
Author:
License:



2. package.json

Most important file.
Think:package.json = Project Identity Card

Why package.json?
Suppose your project uses:Express,Mongoose,Cors,Dotenv
Another developer only needs:npm install
npm reads package.json and installs everything.


3. package-lock.json
Don't delete it.
Think:
package.json = Shopping List
package-lock.json = Exact Bill

package-lock.json stores:
Exact Version (Example: "express": "5.1.0")
Exact Dependencies
Dependency Tree

Without package-lock:
Your PC - Express 5.1.0
Friend's PC - Express 5.2.0
Different behavior may occur.



4. node_modules
Biggest folder. Created automatically after: npm install

Inside Contains:
example : Express,Dependencies of Express,Dependencies of Dependencies
Sometimes thousands of files.

- Never upload: node_modules to GitHub.
- If deleted: npm install will recreate it.

5. npm install package_name
- Used to install packages.
- or "npm i package_name" same thing

example :
npm install --global nodemon
npm i -g nodemon

then start for : nodemon main.js

What is Nodemon :

Normal Node: node server.js
When code changes: Stop server -> Run again
Very annoying.

Nodemon solves this:
nodemon server.js
Now : Save File -> Server Restarts Automatically

Why Use Nodemon :
Without nodemon : Change Code -> Ctrl + C -> node server.js
Again and again.

With nodemon : Change Code -> Save -> Auto Restart
Much easier.


6.Express :
Install:npm install express

Express is the most popular Node.js framework.

Think:
Node.js = Engine
Express = Car Body

Without Express Creating server: A lot of code.
With Express - Much cleaner.

Why Use Express?
Express provides:
Routing - app.get("/")
Middleware -app.use()
API Creation - GET POST PUT DELETE
Request Handling - req res
Easy Backend Development

Real-Life Example

Imagine:Without Express
Build Bike From Raw Metal
Very difficult.

With Express
Ready-Made Bike Kit
Just assemble and ride.



7. What is Slugify :
Package: npm install slugify
- Used to create SEO-friendly URLs.
- For URLs:

*/

var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b = slugify('Hiy i am Riku &&*(^%$$^^&ring', '_')  // some_string
console.log(b)



/*
Project
│
├── node_modules
├── package.json
├── package-lock.json
└── server.js
*/
/*
npm init -y

npm install express

npm install mongoose

npm install cors

npm install dotenv

npm install --global nodemon

npm start

npm install
*/