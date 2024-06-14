export const formatDateToAPI = (daysAgo: number = 0) => {
	const date = new Date();
	date.setDate(date.getDate() - daysAgo);

	const dateFormattedInEnUS = new Intl.DateTimeFormat().format(date);
	const dateFormattedToApi = dateFormattedInEnUS.split('/').reverse().join('-');

	return dateFormattedToApi;
};
