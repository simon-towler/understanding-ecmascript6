//run node with --harmony flag
"use strict"//extended mode

const items = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
function process(item) {
	//do nothing
}

for (let i=0; i<10; i++) {
	process(items[i]);

	console.log(i); // 0-9
}

//i is not still accessible here
	//console.log(i); // error i is not defined