//
function ajaxOptions({
	url = 'http://some.base.url/api',
	method = 'post',
	data,
	callback,
	headers: [headers0 = 'Content-Type: text/plain', ...otherHeaders] = [],
} = {}) {
	return {
		url,
		method,
		data,
		callback,
		headers: [headers0, ...otherHeaders],
	};
}

// with no arguments, return the defaults as an object
var defaults = ajaxOptions();

// with an argument, mixes in the settings with the defaults
var mixed = ajaxOptions({
	url: 'http://some.other.url/',
	data: 42,
	callback: function (resp) {
		// ...
	},
});

console.table({ defaults, mixed });
