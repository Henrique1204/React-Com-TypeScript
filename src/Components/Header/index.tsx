import React from 'react';

import DateRange from 'Components/DateRange';
import Months from 'Components/Months';

const Header: Component = () => {
	const [title, setTitle] = React.useState('Resumo');

	return (
		<header className='mb'>
			<div className='datarange mb'>
				<DateRange />
				<h1 className='box bg-3'>{title}</h1>
			</div>

			<Months />
		</header>
	);
};

export default Header;
