let arr = [12 ,23 , 45 , 9 ,11]

//we can write map method like this
// let new_arr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     new_arr.push(element**2)
// }

// let new_arr = arr.map((e)=>{
//     return e**2
// })

// 01-map:
//creates a new array by performing some operation on each element.
let new_arr = arr.map((value , index , arr)=>{
    return value**2
})
console.log(new_arr)


//02- filte():
//  filters an array with values that passes a test . create a new array
// const grater_than_twenty = (e)=>{
//     if(e>20){
//         return true
//     }
//     return false
// }
// console.log(arr.filter(grater_than_twenty))
console.log(arr.filter((e)=>{
    if(e>20){
        return true
    }
    return false
}))


// 04-reduce_method:
// Reduces an array to single value
let arr2 = [1,2,3,4,5,6]
const red =(a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))


// 05.array from:
//  used to create an array from  any other object
console.log(Array.from("Riku"))//[ 'R', 'i', 'k', 'u' ]