let PersonClass = class PersonClass2 {

	//equivalent of the PersonType constructor
	constructor(name) {
		this.name = name;
	}

	//equivalent of PersonType.prototype.sayName
	sayName() {
		console.log(this.name);
	}
};

// try it out

console.log(typeof PersonClass); // function

// no binding for PersonClass2 exists outside the class
console.log(typeof PersonClass2); // undefined
// but it is a Class and you can get its Class Name!
console.log(PersonClass.name); // PersonClass2 !