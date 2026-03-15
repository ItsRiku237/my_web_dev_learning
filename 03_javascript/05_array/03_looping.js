a  =[2 ,93 , 95 ,23 ,6]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}

//for each : loop calls a function, once for each array element
a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})

const obj={
    a:1,
    b:2,
    c:3
}
//02-for-of :for- of loop lan be usid to get theValues from an array
for(const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)){
        const element = obj[key];
        console.log(element)
        console.log(element ,key)
    }
}

// 03-for_in : 
// for-in loop lan be used to for in lay ton te aused to
for (const element of a) {
    console.log(element)
}
