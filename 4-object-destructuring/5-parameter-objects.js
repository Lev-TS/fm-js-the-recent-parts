// if we do not need access to the original object passed into the function destructure it inside of parametes
  function noOriginalObject({a, b} = {}) {
    console.log(a == 1);
    console.log(b == 2)
  }

  noOriginalObject({a: 1, b: 2})
//

// if we need access to the original object destructure it in the body
  function yesOriginalObject(tmp = {}) {
    var {
      c,
      d
    } = tmp;
    
    console.log(Object.keys(tmp).length == 2)
    console.log(c == 3);
    console.log(d == 4)
  }

  yesOriginalObject({c: 3, d: 4})
//
