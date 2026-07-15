import path from "path"

// console.log(path) // all function of path module

let mypath = "d:\\New folder\\Web Devlopment\\04_node\\03_\\about_path.js"

console.log(path.extname(mypath)) // .js
console.log(path.dirname(mypath)) // d:\New folder\Web Devlopment\04_node\03_
console.log(path.basename(mypath)) // about_path.js
console.log(path.isAbsolute(mypath)) //true
console.log(path.normalize(mypath)) // d:\New folder\Web Devlopment\04_node\03_\about_path.js
console.log(path.join("c:/" , "Programs\\Riku.txt")) // c:\Programs\Riku.txt