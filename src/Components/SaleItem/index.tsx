import React from 'react';

import { NavLink } from 'react-router-dom';

import { formats } from 'Core/Helpers/formats';

import * as Types from './types';

const SaleItem: Component<Types.SaleItemProps> = ({ sale }) => {
	return (
		<div className='sale box'>
			<NavLink to={`/vendas/${sale.id}`} style={{ fontFamily: 'monospace' }}>
				{sale.id}
			</NavLink>

			<div>{sale.nome}</div>

			<div>{formats.money(sale.preco)}</div>
		</div>
	);
};

export default SaleItem;
