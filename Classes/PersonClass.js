class PersonClass {

	//equivalent of the PersonType constructor function
	constructor(name) {
		this.name = name;
	}

	//equivalent of PersonType.prototype.sayName
	sayName() {
		console.log(this.name);
	}
}

//demos
let person = new PersonClass("Nicholas");
person.sayName(); //outputs "Nicholas"

console.log(person instanceof PersonClass); //true
console.log(person instanceof Object); //true

console.log(typeof PersonClass); // "function"
console.log(typeof PersonClass.prototype.sayName); //"function"
console.log(PersonClass.name); // "PersonClass"