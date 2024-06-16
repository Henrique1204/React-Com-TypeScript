import React from 'react';

import {
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

import { useSaleContext } from 'Contexts/sale';
import { chartSaleDTO } from 'Core/Helpers/chart';
import { StatusSaleEnum } from 'Contexts/sale/types';

const SaleChart: Component = () => {
	const { data } = useSaleContext();

	if (data === null) return <></>;

	return (
		<div className='box mb'>
			<ResponsiveContainer width={'99%'} height={400}>
				<LineChart
					width={400}
					height={400}
					data={chartSaleDTO(data)}
					margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
				>
					<XAxis dataKey='date' />
					<YAxis />

					<Tooltip />
					<Legend />

					<Line
						type='monotone'
						dataKey={StatusSaleEnum.PAID}
						stroke='#A6F'
						strokeWidth={3}
					/>

					<Line
						type='monotone'
						dataKey={StatusSaleEnum.PROCESSING}
						stroke='#FC2'
						strokeWidth={3}
					/>

					<Line
						type='monotone'
						dataKey={StatusSaleEnum.FAIL}
						stroke='#000'
						strokeWidth={3}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default SaleChart;
