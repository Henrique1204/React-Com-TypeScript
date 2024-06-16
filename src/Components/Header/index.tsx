import React from 'react';

import { useLocation } from 'react-router-dom';

import DateRange from 'Components/DateRange';
import Months from 'Components/Months';

const Header: Component = () => {
	const [title, setTitle] = React.useState('Resumo');

	const { pathname } = useLocation();

	React.useEffect(() => {
		const TITLE_BY_PATHNAME: Record<string, string> = {
			'/': 'Resumo',
			'/vendas': 'Vendas',
		};

		const TITLE_DEFAULT = 'Venda';

		const titleByPathname = TITLE_BY_PATHNAME[pathname] || TITLE_DEFAULT;

		document.title = `Fintech | ${titleByPathname}`;

		setTitle(titleByPathname);
	}, [pathname]);

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
