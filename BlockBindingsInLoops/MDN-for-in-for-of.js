var arr = [3, 5, 7];
arr.foo = 'hello';
arr.push('world');
arr.push(9);

//for in
console.log("for-in");
for (var i in arr) {
	console.log(i); // logs "0", "1", "2", "3", "4", "foo"
}

//for of
console.log("for-of")
for (var i of arr) {
	console.log(i); // logs 3, 5, 7, 'world', 9
}

console.log(arr); // logs [ 3, 5, 7, 'world', 9, foo: 'hello' ]