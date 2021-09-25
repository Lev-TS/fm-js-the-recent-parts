function data() {
	return { a: 1, b: 2, c: 3, d: 4, e: 5 };
}

var {
  b: second,
  a: first,
  c: third,
  ...rest
} = data();

console.log(first == 1);
console.log(second == 2);
console.log(third == 3);
console.log(Object.keys(rest).length == 2);

var {
  f: undeclared
} = data();

console.log(undeclared == undefined)

var {
  f: defaultValue = 6
} = data();

console.log(defaultValue == 6)