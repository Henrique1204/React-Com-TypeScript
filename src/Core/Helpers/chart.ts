import { Sale, StatusSaleEnum } from 'Contexts/sale/types';

type ChartSale = {
	date: string;
	[StatusSaleEnum.PAID]: number;
	[StatusSaleEnum.PROCESSING]: number;
	[StatusSaleEnum.FAIL]: number;
};

export const chartSaleDTO = (sale: Sale[]): ChartSale[] => {
	const salesPerDayInObject = sale.reduce(
		(acc: Record<string, ChartSale>, currentSale) => {
			const [date] = currentSale.data.split(' ');
			const prevSaleWithSameDate = acc[date];

			if (prevSaleWithSameDate) {
				acc[date] = {
					...prevSaleWithSameDate,
					[currentSale.status]:
						prevSaleWithSameDate[currentSale.status] + currentSale.preco,
				};

				return acc;
			}

			acc[date] = {
				date: date.substring(5),
				[StatusSaleEnum.PAID]: 0,
				[StatusSaleEnum.PROCESSING]: 0,
				[StatusSaleEnum.FAIL]: 0,
			};

			return acc;
		},
		{}
	);

	const salesPerDayInArray = Object.values(salesPerDayInObject);

	return salesPerDayInArray;
};
