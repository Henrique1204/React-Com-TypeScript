import React from 'react';

import { useSaleContext } from 'Contexts/sale';

import { Loading } from 'Components/Loader';

import SaleResume from './Components/SaleResume';
import SaleChart from './Components/SaleChart';

const Resume: Component = () => {
	const { data, loading } = useSaleContext();

	if (loading) return <Loading />;

	if (data === null) return <></>;

	return (
		<section>
			<SaleResume />

			<SaleChart />
		</section>
	);
};

export default Resume;
