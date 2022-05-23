const prepareTimestamp = (date) => {
	const year = date.substring(0, 4);
	const month = date.substring(5, 7);
	const day = date.substring(8, 10);
	const date_info = {
		year: year,
		month: month,
		day: day
	};
	return date_info;
}

module.exports = prepareTimestamp;
