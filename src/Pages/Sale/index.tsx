import React from 'react';

import { useParams } from 'react-router-dom';

import { formats } from 'Core/Helpers/formats';

import useFetch from 'Hooks/useFetch';

import { Sale as ISale } from 'Contexts/sale/types';
import { Loading } from 'Components/Loader';

type SaleWithoutData = Omit<ISale, 'data'>;

const Sale: Component = () => {
	const { id } = useParams();

	const { data: sale, loading } = useFetch<SaleWithoutData>(
		`https://data.origamid.dev/vendas/${id}`
	);

	if (loading) return <Loading />;

	if (sale === null) return <></>;

	return (
		<div>
			<div className='box mb'>ID: {sale.id}</div>
			<div className='box mb'>Nome: {sale.nome}</div>
			<div className='box mb'>Preço: {formats.money(sale.preco)}</div>
			<div className='box mb'>Status: {sale.status}</div>
			<div className='box mb'>Pagamento: {sale.pagamento}</div>
		</div>
	);
};

export default Sale;
