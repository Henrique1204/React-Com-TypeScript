import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { SaleContextProvider } from 'Contexts/sale';

import Routes from 'Routes';

import Header from 'Components/Header';
import Sidenav from 'Components/Sidenav';

import './globals.css';

const App: Component = () => {
	return (
		<BrowserRouter>
			<SaleContextProvider>
				<div className='container'>
					<Sidenav />

					<main>
						<Header />

						<Routes />
					</main>
				</div>
			</SaleContextProvider>
		</BrowserRouter>
	);
};

export default App;
