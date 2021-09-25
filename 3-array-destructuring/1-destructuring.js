function getSomeRecords() {
	return [{ name: 'levan', email: 'lts@gmail.com' }, { name: 'kostas' }];
}

function check(arr) {
	var [
		{ name: firstName, email: firstEmail = 'nobody@none.tld' },
		{ name: secondName, email: secondEmail = 'nobody@none.tld' },
	] = arr;

	console.log(firstName == 'levan');
	console.log(firstEmail == 'lts@gmail.com');
	console.log(secondName == 'kostas');
	console.log(secondEmail == 'nobody@none.tld');
}

check(getSomeRecords())