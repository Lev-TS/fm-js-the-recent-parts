var msg = "Hello World";

console.log(msg.match(/(?<cap>l.)/).groups);
console.log(msg.match(/(?<cap>[jkl])o Wor\k<cap>/))
