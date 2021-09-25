var str = "Hello";
var it = str[Symbol.iterator]();

var strArr = []
for (let v of it) {
  strArr.push(v);
}
console.log(`strArr: ${JSON.stringify(strArr)}`) /* ["H", "e", "l", "l", "o"] */;

var itArr = [];
for (let v of str) {
  itArr.push(v);
} 
console.log(`itArr: ${JSON.stringify(itArr)}`) /* ["H", "e", "l", "l", "o"] */;


var letters = [...str];
console.log(`letters: ${JSON.stringify(letters)}`) /* ["H", "e", "l", "l", "o"] */;