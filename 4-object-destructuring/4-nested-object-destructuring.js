function data() {
	return { 
    a: 1, 
    b: {
      c: 3, 
      d: 4
    },
  };
}


// to assign already exisitng vars we need to wrap the whole statement in braces otherwise curley braces are treated as the bloke scope

  var {
    a,
    b: {
      c,
      d,
    }
  } = data() || {};

  console.log(a == 1);
  console.log(c == 3);
  console.log(d == 4);
//

// if nested object could be missing, assign a default value 
  var {
    e: {
      f,
      g
    } = {}
  } = data() || {};

  console.log(f == undefined);
  console.log(g == undefined);
//
