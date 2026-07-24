// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip


const fs = require("fs")
const path = require("path")


const dirPath = __dirname

const files = fs.readdirSync(dirPath)


for (const file of files) {

    let ext = path.extname(file)
    ext = ext.slice(1);
    //const ext = path.extname(file).slice(1);

    if (ext != "js" && ext != "json" && ext != "") {

        if (!fs.existsSync(ext)) {
            fs.mkdirSync(ext)
        }

        let old_path = path.join(dirPath, file)
        let new_path = path.join(dirPath, ext, file)

        fs.renameSync(old_path, new_path);

    }
}


/*
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const files = fs.readdirSync(__dirname);

// same as
const basePath = "D:\New folder\Web Devlopment\04_node\07_project"
const files = fs.readdirSync(basePath);


for (const file of files) {

    const ext = path.extname(file).slice(1);

    if (ext !== "js" && ext !== "json" && ext !== "") {

        if (!fs.existsSync(ext)) {
            fs.mkdirSync(ext);
        }

        const oldPath = path.join(__dirname, file);
        const newPath = path.join(__dirname, ext, file);

        fs.renameSync(oldPath, newPath);
    }
}
*/