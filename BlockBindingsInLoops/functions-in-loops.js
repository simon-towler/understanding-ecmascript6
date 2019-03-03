//run node with --harmony flag
"use strict"//extended mode

var funcs = [];

for (let i=0; i < 10; i++) {
	funcs.push(function() {
			console.log(i);
	});
}

funcs.forEach(function(func) {
	func(); // should output 0, then 1, then 2, up to 9 -- but doesn't on node v0.10.33
});