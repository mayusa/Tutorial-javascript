// Function arguments
function myFunc (a, b, c) {
	return a + b + c;
}

console.log(myFunc(1,2,3)); // 6
console.log(myFunc(1,2,3,4)); // 6
console.log(myFunc(1,2)); // NaN

/*
Magic arguments
- Like all variables in JavaScript arguments are untyped
- Unspecified arguments become undefined
- Arguments available through the 'arguments' object
		It's array-like but not really an array
*/