import React from 'react';

import { SaleContextProvider } from 'Contexts/sale';

import Header from 'Components/Header';
import Sidebar from 'Components/Sidebar';

import './globals.css';

const App: Component = () => {
	return (
		<SaleContextProvider>
			<div>
				<Sidebar />

				<main>
					<Header />
				</main>
			</div>
		</SaleContextProvider>
	);
};

export default App;
