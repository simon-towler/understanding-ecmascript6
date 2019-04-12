//direct equivalent of CustomHTMLElement Class
let CustomHTMLElement = (function() {

	"use strict"

	const CustomHTMLElement = function(element) {

		//make sure the function was called with new
		if(typeof new.target === "undefined") {
			throw new Error("Constructor must be called with new.");
		}

		this.element = element
	}

	Object.defineProperty(CustomHTMLElement.prototype, "html", {
		enumerable: false,
		configurable: true,
		get: function() {
			return this.element.innerHTML;
		},
		set: function(value) {
			this.element.innerHTML = value;
		}
	});

	return CustomHTMLElement;
}());

//demo

var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, "html");
console.log("get" in descriptor); // true
console.log("set" in descriptor); // true
console.log(descriptor.enumerable); // false

let instance = new CustomHTMLElement("<p>blah</p>");
//instance.html = "<p>blah</p>";
console.log(instance.html);