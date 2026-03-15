let arr = [2, 3, 7, 9]
console.log(arr)


// Array methods :

//01-tostring():
//Converts an array to a  coma Separated value
console.log(arr.toString())

//02- join():
//joins all the array elements using a separator
console.log(arr.join(" and "))

//03-pop():
// it delete element end of the array
console.log(arr.pop())

//04-shift():
// it delete element starting of the array
console.log(arr.shift()) 
console.log(arr)

// 05- push():
// Adds a new element at the end of the array
console.log(arr.push(37)) // it return length of arr
console.log(arr.push(" Riku "))// it return length of arr

// 06-unshift():
// Adds element to the beginning Returns new array length
console.log(arr.unshift(" Jubbu "))// it return length of arr and add element to the starting of the array
console.log(arr)

// 07- delete(): 
// Array elements can be deleted using the delete operator
delete arr[1] //array elements can be deleted using the delete operator
console.log(arr)
console.log(arr.length)

//08-Concat():
//used to join arrays 
let a1 = [3, 2, 7]
let a2 = [9, 23, 79]
console.log(arr.concat(a1, a2)) //returns a new array Does not change existing arrays

// 09-sort():
//sort a method is used to sort an array alphabetically [modifes the oruginal array]
console.log(a1.sort())

// 10-splice():
//splice can be used to add new items to an array
arr.splice(1, 2)
console.log(arr)
arr.splice(1, 2, 23, 73) //( position to add ,no of element to remove ,element to be add)
console.log(arr)//Reterns deleted items and  modifies the Arry

//11-sliee():
//slics out a picce from an array It creates a new array
console.log(arr.slice(2)) //[ 7, 37, ' Riku ' ]
console.log(arr.slice(1,3)) //[ 3, 7 ]
// console.log(arr) //[ ' Jubbu ', 3, 7, 37, ' Riku ' ]


//12-reverse(): 
//Reverses the elements in the source array
console.log(arr.reverse()) //[ ' Riku ', 37, 7, 3, ' Jubbu ' ]