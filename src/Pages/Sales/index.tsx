import React from 'react';

import { useSaleContext } from 'Contexts/sale';

import SaleItem from 'Components/SaleItem';

const Sales: Component = () => {
	const { data } = useSaleContext();

	if (data === null) return null;

	return (
		<ul>
			{data.map((sale) => (
				<li key={sale.id}>
					<SaleItem sale={sale} />
				</li>
			))}
		</ul>
	);
};

export default Sales;
