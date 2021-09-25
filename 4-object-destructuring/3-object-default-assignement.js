function data() {
	return null
}


// it is a good idea to provide a fallback, for cases when the return value is not an object
  
  ({
    a = 42,
    b
  } = data() || {});

  console.log(a == 42);
  console.log(b == undefined)
//