const money = (value: number): string => {
	return value.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});
};

export const formats = {
	money,
};
