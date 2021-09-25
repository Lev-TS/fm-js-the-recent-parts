function check(arr) {
	var tmp;

	var [
		first,
		second,
		third,
		...rest
	] = tmp = arr; // we can chain equality if we need access to the temporary variable

	console.log(first == 1);
	console.log(second == 2);
	console.log(third == 3);
	console.log(tmp == arr)
	console.log(rest.length === 0); // if there are nothing to assign to the "rest" varuabke it will be an empty array
}

check([1, 2, 3]);
