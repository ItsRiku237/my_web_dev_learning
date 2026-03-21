//Faulty calculator
/*Mini Project: Faulty Calculator

Concepts Used:
1. Math.random()
2. prompt()
3. if-else
4. operators (+, -, *, /, **)
5. object mapping
6. type conversion (Number())

Important:
- prompt() returns string
- use Number() for calculation
- object used to map wrong operations */
let random = Math.random()
let a = Number(prompt("Enter first number: "))
let b = Number(prompt("Enter second number: "))
let c = prompt("Enter operation")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

console.log(random)
if (random > 0.1) {
    // perform correct calculation
    // alert('The result is ${eval('${a} ${c} ${b}')}')
    if (c == '+') {
        console.log("The result is : ", Number(a) + Number(b))
    }
    else if (c == '-') {
        console.log("The result is : ", Number(a) - Number(b))
    }
    else if (c == '*') {
        console.log("The result is : ", Number(a) * Number(b))
    }
    else if (c == '/') {
        console.log("The result is : ", Number(a) / Number(b))
    }
    else {
        console.log("The result is : ", Number(a) ** Number(b))
    }

}
else {
    // perform wrong calculation
    if (c == '+') {
        console.log("The result is : ", Number(a) - Number(b))
    }
    else if (c == '-') {
        console.log("The result is : ", Number(a) / Number(b))
    }
    else if (c == '*') {
        console.log("The result is : ", Number(a) + Number(b))
    }
    else if (c == '/') {
        console.log("The result is : ", Number(a) ** Number(b))
    }
    else {
        console.log("The result is : ", Number(a) ** Number(b))
    }
}