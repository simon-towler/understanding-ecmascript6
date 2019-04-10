//take a class/function and call new on it
function createObject(classDef) {
	return new classDef();
}

let obj = createObject(class {

	sayHi() {
		console.log("Hi!");
	}

});

//demo
obj.sayHi(); // "Hi!"