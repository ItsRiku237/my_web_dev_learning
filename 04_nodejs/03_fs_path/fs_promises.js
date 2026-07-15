// Callback HEll solve by promises

import fs from "fs/promises"
// const fsp = require("fs/promises")

let a = await fs.readFile("Riku.txt")
let b = await fs.appendFile("Riku.txt" , " I am devloper also.\n")

console.log(a.toString() , b)