function data() {
	return { a: 1, b: 2, c: 3, d: 4, e: 5 };
}


// to assign already exisitng vars we need to wrap the whole statement in braces otherwise curley braces are treated as the bloke scope
  var first, second;
  
  ({
    b: second,
    a: first
  } = data());

  console.log(first == 1);
  console.log(second == 2)
//

// alternatively if we want to have references to the object after destructuring we don't need braces
  var tmp;
  var first, second;
  
  tmp = {
    b: second,
    a: first
  } = data();

  console.log(first == 1);
  console.log(second == 2);
  console.log(Object.keys(tmp).length == 5);
//
