import React from 'react';

import DateRange from 'Components/DateRange';
import Months from 'Components/Months';

const Header: Component = () => {
	return (
		<header className='mb'>
			<div className='mb'>
				<DateRange />
			</div>

			<Months />
		</header>
	);
};

export default Header;
