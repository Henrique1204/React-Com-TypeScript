import React from 'react';

import { NavLink } from 'react-router-dom';

import FintechSVG from 'Assets/FintechSVG';
import resumeSvg from 'Assets/icons/resumo.svg';
import saleSvg from 'Assets/icons/vendas.svg';
import webhooksSvg from 'Assets/icons/webhooks.svg';
import settingsSvg from 'Assets/icons/configuracoes.svg';
import contactSvg from 'Assets/icons/contato.svg';
import exitSvg from 'Assets/icons/sair.svg';

const NAV_ITEMS = [
	{ id: '1resume', label: 'Resumo', link: '/', icon: resumeSvg },
	{ id: '2sales', label: 'Vendas', link: '/vendas', icon: saleSvg },
	{ id: '3webhooks', label: 'Webhooks', link: '', icon: webhooksSvg },
	{ id: '4settings', label: 'Configurações', link: '', icon: settingsSvg },
	{ id: '5contact', label: 'Contato', link: '', icon: contactSvg },
	{ id: '6exit', label: 'Sair', link: '', icon: exitSvg },
];

const Sidenav: Component = () => {
	return (
		<nav className='sidenav box bg-3'>
			<FintechSVG title='Fintech Logo' />

			<ul>
				{NAV_ITEMS.map(({ id, icon, label, link }) => (
					<li key={id}>
						<span>
							<img src={icon} alt={label} />
						</span>

						{link ? <NavLink to={link}>{label}</NavLink> : label}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Sidenav;
