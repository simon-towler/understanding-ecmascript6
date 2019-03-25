//custom type

//constructor function
function PersonType(name) {
	this.name = name;
}

//set inheritable method
PersonType.prototype.sayName = function() {
	console.log(this.name);
}

//demos

//instantiate new instance of PersonType
var person = new PersonType("Nicholas");
person.sayName(); //outputs "Nicholas"

/*	instanceof operator test the presence of
	constructor.prototype in object's prototype chain 
*/
console.log(person instanceof PersonType); //true
console.log(person instanceof Object); // true