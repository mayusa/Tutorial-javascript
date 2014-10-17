/*
Getting an array of unique values from an array 
containing duplicates in JavaScript
*/

// solution 1: add method to array prototype
Array.prototype.unique = function() {
	var unique = [];
	for (var i = 0; i < this.length; i++) {
		if (unique.indexOf(this[i]) == -1) {
			unique.push(this[i]);
		}
	}
	return unique;
};

// solution 2: using reduce method
var arrayUnique = function(a) {
	//p: previousValue (fist:initArray)
	//c:currentValue
	return a.reduce(function(p, c) {
		if (p.indexOf(c) < 0){ 
			p.push(c);
		}
		return p;
	}, []); // []: initArray
};