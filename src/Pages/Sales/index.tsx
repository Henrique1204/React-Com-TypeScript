import React from 'react';

import { useSaleContext } from 'Contexts/sale';

import { Loading } from 'Components/Loader';

import SaleItem from 'Components/SaleItem';

const Sales: Component = () => {
	const { data, loading } = useSaleContext();

	if (loading) return <Loading />;

	if (data === null) return <></>;

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
