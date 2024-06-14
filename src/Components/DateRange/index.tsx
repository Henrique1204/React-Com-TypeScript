import React from 'react';

import DateInput from 'Components/DateInput';
import { useSaleContext } from 'Contexts/sale';

const DateRange: Component = () => {
	const { startDate, setStartDate, endDate, setEndDate } = useSaleContext();

	const handlePreventSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
	};

	return (
		<form className='box flex' onSubmit={handlePreventSubmit}>
			<DateInput label='Início' value={startDate} onChange={setStartDate} />
			<DateInput label='Final' value={endDate} onChange={setEndDate} />
		</form>
	);
};

export default DateRange;
