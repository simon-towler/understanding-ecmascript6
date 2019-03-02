const items = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
function process(item) {
	//do nothing
}

for (var i=0; i<10; i++) {
	process(items[i]);

	console.log(i); // 0-9
}

//i is still accessible here
	console.log(i); // 10