let a = 1;
console.log("For Loops")
for (let i = 0; i < 100; i++) {
    console.log(a+i);
}


let obj={
    Name : "Riku",
    Branch : "CSE",
    Regd_no : 78
}
console.log("For-in Loops")
for (const key in obj) {
    const element = obj[key];
    console.log(key , element)
}
for (const key in obj) {
    console.log(key)
}


console.log("For-of Loops")
for (const c of "Riku") {
    console.log(c)
}
