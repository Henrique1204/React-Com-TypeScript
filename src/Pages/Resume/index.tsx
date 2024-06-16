import React from 'react';

import { useSaleContext } from 'Contexts/sale';

import { Loading } from 'Components/Loader';

import SaleResume from './Components/SaleResume';

const Resume: Component = () => {
	const { data, loading } = useSaleContext();

	if (loading) return <Loading />;

	if (data === null) return <></>;

	return (
		<section>
			<SaleResume />

			<div className='box mb'>gráficos</div>
		</section>
	);
};

export default Resume;
