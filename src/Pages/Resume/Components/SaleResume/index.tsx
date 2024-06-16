import React from 'react';

import { getSaleResume } from 'Core/Helpers/saleResume/getSaleResume';
import { formats } from 'Core/Helpers/formats';

import { useSaleContext } from 'Contexts/sale';

const SaleResume: Component = () => {
	const { data } = useSaleContext();

	const { totalOfSales, totalReceived, totalToReceive } = getSaleResume(data);

	return (
		<div className='resume flex mb'>
			<div className='box'>
				<h2>Vendas</h2>

				<span>{formats.money(totalOfSales)}</span>
			</div>

			<div className='box'>
				<h2>Recebido</h2>

				<span>{formats.money(totalReceived)}</span>
			</div>

			<div className='box'>
				<h2>Processando</h2>

				<span>{formats.money(totalToReceive)}</span>
			</div>
		</div>
	);
};

export default SaleResume;
