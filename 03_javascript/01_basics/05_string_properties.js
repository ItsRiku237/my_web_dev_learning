let a = "Riku";
console.log(a)
console.log(a[0])
console.log(a[3])
console.log(a[4])

console.log(a.length)

let real_name = "Riku"
let friend = "Shibu"

// Simularly we can use \" inside a string with double quotes
console.log("My name is " + real_name + "and his friend \"name\' is " + friend)
/*
Other estope sequence charactors are as folows
\n → Newline
\t → Tab
\r → Carriage Return
*/

// Template Literals 
// Template litevals use backtics instad of guotes to define string
console.log(`My 'name' is ${real_name} and his "friend" name is ${friend}`) //inside we can use single and double quates

let b = "Rajband"
console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(b.slice(1, 4))
console.log(b.replace("aj", "23"))
console.log(b.concat(a ,"Jubbuu"))
console.log(b.charAt(0))
console.log(b.indexOf(jb))
console.log(b.startsWith(Ra))
console.log(b.endsWith(nd))

let name = "   Riku    "
console.log(name.triml()) //Removes whitespaces
