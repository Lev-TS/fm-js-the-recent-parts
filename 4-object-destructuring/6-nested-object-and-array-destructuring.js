// we can destructure a property as many times as we need e.g. we can destructure a nested object and it's properties
  var obj = {
    a: 1,
    b: {
      c: 2
    },
    d: 3
  }

  var {
    b,
    b: {
      c
    } = {},
  } = obj;

  console.log(Object.keys(b).length == 1);
  console.log(c == 2);
//

// we can destructure nested arrays as well 
  var obj = {
    d: 4,
    e: [5, 6]
  }

  var {
    d,
    e: [
      f,
      g
    ] = []
  } = obj;

  console.log(d == 4);
  console.log(f == 5);
  console.log(g == 6);
//