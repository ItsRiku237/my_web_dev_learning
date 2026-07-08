/*
Error Handling:
Detecting errors and preventing the program from crashing.


Why Error Handling:
-User enters wrong password
-API server is down
-Internet connection is lost
-File doesn't exist

Without error handling : Application Crashes
With error handling : Show Friendly Error Message 
*/

let a = prompt("Enter first number : ")
let b = prompt("Enter second number : ")


/*
Throwing Custom Errors :
Sometimes JavaScript doesn't throw an error automatically.
You may want to create your own error. 
*/
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorrry this is not allowed.")
}

let sum = parseInt(a) + parseInt(b)

// let x = 8
try {
    // risky code
    console.log("The sum is ", sum)
    console.log("The final solution is ", sum * x)// error bcz x is not defiend
} catch (error) { 
    // handle error
    console.log("Error aa gaya bhai....")
}
finally{
    //Execute this code whether an error occurs or not.
    console.log("Always run after return statement in a function of block.")
}




/*
Error Object :

When an error happens:
catch(error)

JavaScript automatically provides an Error Object.
Think: Error Object = Error Information 

Important Properties:
1. console.log(error);
 - ex. ReferenceError: y is not defined
2. error.name : Returns error type.
    console.log(error.name);
    - ex. ReferenceError
3. error.message : Returns error message.
    console.log(error.message)
    - ex. y is not defined


Common Error Types :
1. ReferenceError : Variable doesn't exist.
2. SyntaxError : Invalid syntax.
3. TypeError : Wrong operation on data type.
*/


//try-catch-finally Together
try {

   let age = 15;

   if(age < 18){

      throw new Error("Age must be 18+");

   }

   console.log("Eligible");

}
catch(error){

   console.log(error.message);

}
finally{

   console.log("Validation Finished");

}


/*
output:
Age must be 18+
Validation Finished 
*/