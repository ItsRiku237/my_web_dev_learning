function nice(name) {
    console.log("Hiy  " + name + " you ar nice !")
    console.log("Hiy " + name + " you ar good!")
}

nice("Riku") // function Invocation
nice("Shibu")
nice("Suv")

function add(a, b ,c = 7) {
    return a + b +c
}

result = add(2, 3)
console.log("The sum of these no. is : " + result)
console.log("The sum of these no. is : " + add(2, 3 ,1))

function sum(a, b ,c = 7) {
    console.log(a,b,c) //2 undefined 7
}
console.log("The sum of these no. is : " + sum(2)) //The sum of these no. is : undefined

// Arrow function
const func1 = (x) =>{
    console.log("I am an arrow functiion ",x)
}
// Another way fo create & use the function
func1(34)
func1(23)
