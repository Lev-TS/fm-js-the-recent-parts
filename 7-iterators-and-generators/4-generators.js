// generator function produces iterator and it should always have '*'
function* main() {
	yield 1;
	yield 2;
	yield 3;
	return 4; /* bad practice to return something from the generator */
}

var it = main();

console.log(it.next()); /* {value: 1, done: false} */
console.log(it.next()); /* {value: 2, done: false} */
console.log(it.next()); /* {value: 3, done: false} */
console.log(it.next()); /* {value: 4, done: true} */

// it is a bad practice to return a value from generator
// because only yield is
console.log([...main()]); /* [1, 2, 3] */

// possible use of generator in custom iterator for the object
var obj = {
	a: 1,
	b: 2,
	c: 3,
	*[Symbol.iterator]() {
		for (let key of Object.keys(this)) {
			yield this[key];
		}
	},
};

console.log([...obj]); /* [1, 2, 3] */
