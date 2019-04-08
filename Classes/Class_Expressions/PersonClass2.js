// Named Class Expression
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

// show that no binding for PersonClass2 exists outside the class
console.log(typeof PersonClass2); // undefined
// but you can get the name of the class!
console.log(PersonClass.name); // PersonClass2

let instance = new PersonClass("Simon");
console.log(instance.name); // "Simon"