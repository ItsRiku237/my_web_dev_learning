// "type":"common.js"

//example 1 recive from(module_systems.js):
const d = require("./module_systems.js")
console.log(d , __dirname , __filename)


//example 2 recive from(module_systems.js):
const e = require("./module_systems.js")
console.log(e , __dirname , __filename)


//example 3 recive from(module_systems.js):
const add = require("./module_systems.js");
console.log(add(2,3));





// "type":"module"
import {a ,b , c} from "./module_systems.js"
console.log(a ,b , c)

import riku from  "./module_systems.js"
console.log(riku)

//example recive from(module_systems.js):
import {add1} from "./module_systems.js"
console.log(add1(2,3));