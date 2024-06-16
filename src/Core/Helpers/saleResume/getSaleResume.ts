import { Sale } from 'Contexts/sale/types';

import { SaleResume } from './types';

import { getSaleSumPolicy } from './strategy';

export const getSaleResume = (sales: Sale[] | null): SaleResume => {
	const salesHandled = sales || [];

	const salesResume = salesHandled.reduce<SaleResume>(
		(acc, currentSale) => {
			const sumStrategy = getSaleSumPolicy(currentSale);

			sumStrategy(currentSale, acc);

			return acc;
		},
		{
			totalOfSales: 0,
			totalReceived: 0,
			totalToReceive: 0,
		}
	);

	return salesResume;
};
