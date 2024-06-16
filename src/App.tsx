import React from 'react';

import { SaleContextProvider } from 'Contexts/sale';

import Header from 'Components/Header';
import Sidebar from 'Components/Sidebar';

import Resume from 'Pages/Resume';
import Sales from 'Pages/Sales';

import './globals.css';

const App: Component = () => {
	return (
		<SaleContextProvider>
			<div className='container'>
				<Sidebar />

				<main>
					<Header />

					<Resume />
					<Sales />
				</main>
			</div>
		</SaleContextProvider>
	);
};

export default App;
