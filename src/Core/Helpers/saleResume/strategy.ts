import { Sale, StatusSaleEnum } from 'Contexts/sale/types';

import { SaleResume } from './types';

type SaleSumPolicyFn = (sale: Sale, saleResume: SaleResume) => void;

const failSaleSumPolicy: SaleSumPolicyFn = () => {};

const paidSaleSumPolicy: SaleSumPolicyFn = (sale, saleResume) => {
	saleResume.totalOfSales += sale.preco;
	saleResume.totalReceived += sale.preco;
};

const processingSaleSumPolicy: SaleSumPolicyFn = (sale, saleResume) => {
	saleResume.totalOfSales += sale.preco;
	saleResume.totalToReceive += sale.preco;
};

const defaultSaleSumPolicy: SaleSumPolicyFn = (sale, saleResume) => {
	saleResume.totalOfSales += sale.preco;
};

export const getSaleSumPolicy = (sale: Sale): SaleSumPolicyFn => {
	const saleSumPolicyByStatus = {
		[StatusSaleEnum.FAIL]: failSaleSumPolicy,
		[StatusSaleEnum.PAID]: paidSaleSumPolicy,
		[StatusSaleEnum.PROCESSING]: processingSaleSumPolicy,
	};

	return saleSumPolicyByStatus[sale.status] || defaultSaleSumPolicy;
};
