// if we do not need second element in the array we can simply leave it out using comma
  skipSecondEl([1, 2, 3]);

  function skipSecondEl(arr) {
		var [
			first,
			, // skips second element
			third
		] = arr;

		console.log(first == 1 && third == 3);
  }
//


// we can use destructuring to swap values
  var x = 10;
  var y = 20;

  [y, x] = [x, y] //swap

  console.log(x == 20 && y == 10);
//
