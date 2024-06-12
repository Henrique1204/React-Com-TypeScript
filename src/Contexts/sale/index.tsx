import React from 'react';

import useFetch from 'Hooks/useFetch';

import * as Types from './types';

const SaleContext = React.createContext<Types.PartialSaleContextState>({});

export const SaleContextProvider: Component = ({ children }) => {
	const { data, error, loading } = useFetch<Types.Sale[]>(
		'https://data.origamid.dev/vendas/'
	);

	return (
		<SaleContext.Provider value={{ data, loading, error }}>
			{children}
		</SaleContext.Provider>
	);
};

export const useSaleContext = () => {
	const contextData = React.useContext(SaleContext);

	if (!contextData) {
		throw new Error(
			'useSaleContext precisa estar dentro de SaleContextProvider'
		);
	}

	return contextData as Types.SaleContextState;
};

export default {
	SaleContextProvider,
	useSaleContext,
};
