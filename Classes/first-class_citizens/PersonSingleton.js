/* Here, an anonymous class expression is created and then executed
 * immediately. This pattern allows you to use the class syntax for
 * creating singletons without leaving a class reference available
 * for inspection.
 */
let person = new class {

	constructor(name) {
		this.name = name;
	}

	sayName() {
		console.log(this.name);
	}

}("Simon");

//demo

person.sayName(); // "Simon"