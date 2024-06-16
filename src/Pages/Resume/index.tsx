import React from 'react';

import { useSaleContext } from 'Contexts/sale';

import SaleResume from './Components/SaleResume';

const Resume: Component = () => {
	const { data } = useSaleContext();

	if (data === null) return <></>;

	return (
		<section>
			<SaleResume />

			<div className='box mb'>gráficos</div>
		</section>
	);
};

export default Resume;
