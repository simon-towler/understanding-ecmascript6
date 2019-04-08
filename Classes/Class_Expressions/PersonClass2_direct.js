//direct equivalent of PersonClass named class expression
let PersonClass = (function() {

	"use strict";

	const PersonClass2 = function(name) {

		// make sure function was called with new
		// (within a func or constructor, new.target is undefined when it's not called with new)
		if (typeof new.target === "undefined") {
			throw new Error("Constructor must be called with new.");
		}

		this.name = name;
	}

	Object.defineProperty(PersonClass2.prototype, "sayName", {
		value: function() {
			//make sure the method wasn't called with new
			if (typeof new.target !== "undefined") {
				throw new Error("Method cannot be called with new.");
			}
			console.log(this.name);
		},
		enumerable: false,
		writable: true,
		configurable: true
	});

	return PersonClass2;
}());

// try it out

console.log(typeof PersonClass); // function

// there's no external binding for PersonClass2
console.log(typeof PersonClass2); // undefined
// but nonetheless you can get its function name!
console.log(PersonClass.name); // PersonClass2

let instance = new PersonClass("Simon");
console.log(instance.name); // "Simon"