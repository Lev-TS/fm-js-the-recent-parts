var hello = "Hello";
var world = ["W", "o", "r", "l", "d"];

var it1 = hello[Symbol.iterator]();
var it2 = world[Symbol.iterator]();

console.log(it1.next()); /* { value: 'H', done: false } */
console.log(it1.next()); /* { value: 'e', done: false } */
console.log(it1.next()); /* { value: 'l', done: false } */
console.log(it1.next()); /* { value: 'l', done: false } */
console.log(it1.next()); /* { value: 'o', done: false } */
console.log(it1.next()); /* { value: 'undefined', done: true } */