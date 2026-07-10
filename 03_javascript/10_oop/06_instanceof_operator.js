/*
instanceof Operator :
Checks whether an object belongs to a class.

Syntax :
object instanceof ClassName

Returns : true or false
*/

class Person {

}
const p1 = new Person();

console.log(p1 instanceof Person); //Output : true
console.log(p1 instanceof Array); //Output : false