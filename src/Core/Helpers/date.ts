export const formatDate = (date: Date) => {
	const dateFormattedInEnUS = new Intl.DateTimeFormat().format(date);
	const dateFormattedToApi = dateFormattedInEnUS.split('/').reverse().join('-');

	return dateFormattedToApi;
};

export const formatDateToAPI = (daysAgo: number = 0) => {
	const date = new Date();
	date.setDate(date.getDate() + daysAgo);

	return formatDate(date);
};

export const getMonthName = (monthsAgo: number = 0) => {
	const date = new Date();
	date.setMonth(date.getMonth() + monthsAgo);

	const name = new Intl.DateTimeFormat('pt-BR', {
		month: 'long',
	}).format(date);

	return name;
};
