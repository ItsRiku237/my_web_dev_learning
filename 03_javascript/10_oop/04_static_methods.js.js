/*
Static Method :
Belongs to class, not object.
*/
class MathUtils {

    static add(a, b) {

        return a + b;

    }

}

// Call:
console.log(MathUtils.add(10, 20)); //Output : 30

/*
Wrong:
const obj = new MathUtils();
obj.add();

Error -> Why?

Static methods belong to:
MathUtils
not object.
*/
