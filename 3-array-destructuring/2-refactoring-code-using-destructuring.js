var arr_1 = [1, 2, 3];
var arr_2 = [1, 2];
var arr_3 = [1, undefined, 3, 4, 5];
var arr_4 = [1, null, 3];

function check(arr) {
	var [
		first,
		second = 2, // assigning default
		third,
		...rest // array of remaining elements
	] = arr;

	switch (arr) {
		case arr_1: {
			console.log(first == 1);
			console.log(second == 2);
			console.log(third == 3);
			break;
		}
		case arr_2: {
			console.log(first == 1);
			console.log(second == 2);
			console.log(third == undefined);
			break;
		}
		case arr_3: {
			console.log(first == 1);
			console.log(second == 2);
			console.log(third == 3);
			console.log(rest[0] == 4);
			console.log(rest[1] == 5);
			break;
		}
		case arr_4: {
			console.log(first == 1);
			console.log(second == null);
			console.log(third == 3);
			break;
		}
	}
}

check (arr_1);
check (arr_2);
check (arr_3);
check (arr_4);