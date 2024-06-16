import React from 'react';

import { Route, Routes as _Routes } from 'react-router-dom';

import Resume from 'Pages/Resume';
import Sales from 'Pages/Sales';
import Sale from 'Pages/Sale';

const Routes: Component = () => {
	return (
		<_Routes>
			<Route path='/' element={<Resume />} />
			<Route path='/vendas' element={<Sales />} />
			<Route path='/vendas/:id' element={<Sale />} />
		</_Routes>
	);
};

export default Routes;
