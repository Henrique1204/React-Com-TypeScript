import React from 'react';

import { formats } from 'Core/Helpers/formats';

import * as Types from './types';

const SaleItem: Component<Types.SaleItemProps> = ({ sale }) => {
	return (
		<div className='sale box'>
			<a href='' style={{ fontFamily: 'monospace' }}>
				{sale.id}
			</a>

			<div>{sale.nome}</div>

			<div>{formats.money(sale.preco)}</div>
		</div>
	);
};

export default SaleItem;
