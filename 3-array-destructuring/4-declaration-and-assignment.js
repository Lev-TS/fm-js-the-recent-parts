check([1, 2, 3]);

function check(arr) {
  
	// if we already have vars declared, we can use them to assign values with destructuring
		var first, first, second, third, rest 

		[
			first,
			second,
			third,
			...rest
		] = arr;

		console.log(first == 1);
		console.log(second == 2);
		console.log(third == 3);
		console.log(rest.length === 0);
	//

	// we can also destructure and assign to specific properties of a declared object
		var tmpObj = {}; 
		[
			tmpObj.first,
			tmpObj.second,
			tmpObj.third,
			...tmpObj.rest
		] = arr;

		console.log(tmpObj.first == 1);
		console.log(tmpObj.second == 2);
		console.log(tmpObj.third == 3);
		console.log(tmpObj.rest.length === 0);
	// 

	// we can also destructure and assign to a declared array
		var tmpArr = []; 
		[
			tmpArr[0],
			tmpArr[1],
			tmpArr[2],
			...tmpArr[3]
		] = arr;

		console.log(tmpArr[0] == 1);
		console.log(tmpArr[1] == 2);
		console.log(tmpArr[2] == 3);
		console.log(tmpArr[3].length === 0);
	//

	// we can assign the whole arr to a declared variable and also arr elements to the properties of a declared array
		var tmpArr = [];
		var tmp;

		tmp = [
			tmpArr[0],
			tmpArr[1],
			tmpArr[2],
			...tmpArr[3]
		] = arr;
		
		console.log(tmp == arr ) //tmp will simply point to arr
		console.log(tmpArr[0] == 1);
		console.log(tmpArr[1] == 2);
		console.log(tmpArr[2] == 3);
		console.log(tmpArr[3].length === 0);
	//
}