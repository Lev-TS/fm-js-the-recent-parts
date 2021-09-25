var obj = {
  a: 1,
  b: 2,
  c: 3
};

// objects didn't have iterators but now they do we can use 'in' istead of 'of'
/* 
  for (let v of obj) {
    console.log(v)
  } // TypeError! 
*/

// we could make our own itarators on such data structures
var obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function(){
    var keys = Object.keys(this);
    var index = 0;
    return {
      next: () => (index < keys.length) 
        ? { done: false, value: this[keys[index++]] }
        : { done: true, value: undefined }
    };
  }
};

console.log([...obj]) /* [1, 2, 3] */

