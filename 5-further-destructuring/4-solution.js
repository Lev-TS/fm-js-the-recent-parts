function handleResponse({
	topic = 'JavaScript',
	format = 'Live',
	slides: { start = 0, end = 100 } = {},
	...otherProps
} = {}) {
	TestCase({
		topic,
		format,
		slides: { start, end },
		...otherProps,
	});
}

function TestCase(data) {
	console.log(
		data.topic == 'JS Recent Parts' &&
			data.format == 'Live' &&
			data.slides.start === 0 &&
			data.slides.end === 77
	);
}

handleResponse({ topic: 'JS Recent Parts', slides: { end: 77 } });
