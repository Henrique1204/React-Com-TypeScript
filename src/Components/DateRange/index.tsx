import React from 'react';

import DateInput from 'Components/DateInput';

const DateRange: Component = () => {
	const [startDate, setStartDate] = React.useState<string>('');
	const [endDate, setEndDate] = React.useState<string>('');

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
