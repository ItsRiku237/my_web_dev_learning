// link : https://nodejs.org/api/fs.html


const fs = require("fs")
// import fs from "fs"

// console.log(fs) // it give all function of fs module

console.log("Starting")
fs.writeFileSync("Riku,txt", "Riku is a good boy");
console.log("Ending")


console.log("Starting")
fs.writeFile("Riku,txt", "Riku is a good boy", () => {
    console.log("Done!!")
});
console.log("Ending")


fs.appendFile("Riku,txt", " Riku is devloper.", (error, data) => {
    console.log(data)
});


// Callback HEll
fs.writeFile("Riku.txt", "Riku is a good boy", () => {
    console.log("Done!!");
    fs, fs.readFile("Riku.txt", (e, d) => {
        console.log(e, d.toString());
    })
    // repeat
    fs.writeFile("Riku.txt", "Riku is a good boy", () => {
        console.log("Done!!");
        fs, fs.readFile("Riku.txt", (e, d) => {
            console.log(e, d.toString());
        })
        // repeat
        fs.writeFile("Riku.txt", "Riku is a good boy", () => {
            console.log("Done!!");
            fs, fs.readFile("Riku.txt", (e, d) => {
                console.log(e, d.toString());
            })
            // repeat
        });
    });
});

// Callback HEll solve by promises