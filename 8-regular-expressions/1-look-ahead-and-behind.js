var msg = "Hello World";

console.log(msg.match(/(l.)/g)) /* ["ll", "ld"] */

// look ahead and return "l" and the following letter at the end of the string
console.log(msg.match(/(l.)$/g)) /* ["ld"] */

// look ahead and return capital "H" and the following letter at the begining of the string
console.log(msg.match(/^(H.)/g)) /* ["He"] */

// look ahead and return "l" and the following letter if the following letter is "o"
console.log(msg.match(/(l.)(?=o)/g)) /* ["ll"] */

// look ahead and return "l" and the following letter if the following letter is not "o"
console.log(msg.match(/(l.)(?!o)/g)) /* ["lo", "ld"] */

// these are new in ES2018 the rest already existed

  // look behind and return "l" and the following letter if the letter before "l" is "e"
  console.log(msg.match(/(?<=e)(l.)/g)); /* ["ll"] */

  // look behind and return "l" and the following letter if the letter before "l" is not "e"
  console.log(msg.match(/(?<!e)(l.)/g)); /* ["lo", "ld"] */
//