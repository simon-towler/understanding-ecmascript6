/* As this uses a Class Expression, there is no identifier after 'class'.
 * Instances are instantiated by calling 'new' on var PersonClass.
 * Hence, they are instances of PersonClass, and instanceof will say so.
 */

let PersonClass = class {

	//equivalent of the PersonType constructor
	constructor(name) {
		this.name = name;
	}

	//equivalent of PersonType.prototype.sayName
	sayName() {
		console.log(this.name);
	}
};


//try it

console.log(PersonClass.name); // expect "" but get "PersonClass"

let person = new PersonClass("Simon");

person.sayName(); // outputs "Simon"

console.log(person instanceof PersonClass); // true
console.log(person instanceof Object); // true

console.log(typeof PersonClass); // "function"
console.log(typeof PersonClass.prototype.sayName); // "function"
console.log(PersonClass.name); // expect "" but get "PersonClass"