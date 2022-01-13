
//use var for variables
var int = 42;
var double = Math.PI;
var char = 'A';
var string = "Hello World";


//other types are functions, objects, and arrays
//console.log() used to print to console
var array = [];
var object = {};
function printIt(parameter){
    let x = 0;
    const y = 0;
    console.log(parameter);
};

// toString is automatic

console.log("Int " + int);
console.log("Double " + double);
console.log("Char " + char);
console.log("String " + string);
console.log("\n");

console.log("Function");
printIt(printIt);

//arrays use push to add
array.push(int);
array.push(double);
array.push(char);
array.push(string);

console.log("\n");
console.log("Arrays");
console.log(array);

//arrays can be used as a map (aka dictionary)
array[42] = 42;
array["field"] = 'value';
array.x = "the spot";
console.log(array);

console.log([1,2,3,4,5]);

//simple objects are like arrays
object.field = "value";
object.x = "the spot";
object.int = 42;
object.double = Math.PI;
object.array = array;
object[10] = 10;
object.function = printIt //not the proper way to attach function
console.log(object);
console.log({message: "Zis object defined on the fly", property: "Its got two properties"});

//Classes 

class Person {
    constructor(name, age) {
        //use this to refer to current object
        this.name = name;
        this.age = age;

        //this line does same as above, but more clever
        //shortcut:
        //Object.assign(this, {name, age});

        //local vars still declared with var
        var int = 1337;
        console.log("Local Var: ");
        console.log(int);

    };

    getOlder(){
        this.age++;
    }
}

//use 'new' to create new instances of an object
var alice = new Person("Alice", 33);
var bob = new Person("Bob", 43);
alice.getOlder();
console.log(alice);
console.log(bob);

//advanced Javascript
//Javascrpit is asynchrounous
    //window is top object
    //setTimeout delays function call
//functions can be declared inline even as arguments
//functions can be passed as arguments to other functions

window.setTimeout(function () {
    console.log("One second delay");
    }, 1000
)

window.setTimeout(function () {
    console.log("One millisecond delay");
    }, 1
)