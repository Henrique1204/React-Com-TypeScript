import React from 'react';

import { formatDate, getMonthName } from 'Core/Helpers/date';

import { useSaleContext } from 'Contexts/sale';

import MonthButton from 'Components/MonthButton';

const Months: Component = () => {
	const { setStartDate, setEndDate } = useSaleContext();

	const CURRENT_MONTH = 0;
	const ONE_MONTH_AGO = -1;
	const TWO_MONTH_AGO = -2;
	const THREE_MONTH_AGO = -3;

	const getFirstAndLastDayInMonth = (monthAgo: number = 0) => {
		const date = new Date();

		date.setMonth(date.getMonth() + monthAgo);

		const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
		const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

		return { firstDay, lastDay };
	};

	const handleSetDate =
		(monthAgo: number = 0) =>
		() => {
			const { firstDay, lastDay } = getFirstAndLastDayInMonth(monthAgo);

			setStartDate(formatDate(firstDay));
			setEndDate(formatDate(lastDay));
		};

	return (
		<div className='flex'>
			<MonthButton
				monthName={getMonthName(THREE_MONTH_AGO)}
				onClick={handleSetDate(THREE_MONTH_AGO)}
			/>

			<MonthButton
				monthName={getMonthName(TWO_MONTH_AGO)}
				onClick={handleSetDate(TWO_MONTH_AGO)}
			/>

			<MonthButton
				monthName={getMonthName(ONE_MONTH_AGO)}
				onClick={handleSetDate(ONE_MONTH_AGO)}
			/>

			<MonthButton
				monthName={getMonthName(CURRENT_MONTH)}
				onClick={handleSetDate(CURRENT_MONTH)}
			/>
		</div>
	);
};

export default Months;
