//custom type
//direct equivalent of PersonClass

//outer scope IIFE
let PersonType2 = (function() {
	"use strict";

	//inner scope IIFE constructor function (creates 'name' property)
	const PersonType2 = function(name) {

		//make sure the function was called with 'new'
		if (typeof new.target === "undefined") {
			throw new Error("Constructor must be called with new.");
		}

		this.name = name;
	}//end inner scope IIFE

	//set inheritable method 'sayName'
	Object.defineProperty(PersonType2.prototype, "sayName", {
		value: function() {

			//make sure the method wasn't called with 'new'
			if (typeof new.target !== "undefined") {
				throw new Error("Method cannot be called with new.");
			}

		console.log(this.name);
		},
		enumerable: false,
		writeable: true,
		configurable: true
	});
	//return constructor function
	return PersonType2;

}());//end outer scope IIFE

//demos

//instantiate new instance of PersonType
var person = new PersonType2("Nicholas");
person.sayName(); //outputs "Nicholas"

/*	instanceof operator test the presence of
	constructor.prototype in object's prototype chain 
*/
console.log(person instanceof PersonType2); //true
console.log(person instanceof Object); // true