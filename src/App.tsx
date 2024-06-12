import React from 'react';

import Header from 'Components/Header';
import Sidebar from 'Components/Sidebar';

import './globals.css';

const App: Component = () => {
	return (
		<div>
			<Sidebar />

			<main>
				<Header />
			</main>
		</div>
	);
};

export default App;
