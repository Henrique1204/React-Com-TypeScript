import React from 'react';

import { formatDateToAPI } from 'Core/Helpers/formatDate';

import useFetch from 'Hooks/useFetch';

import * as Types from './types';

const SaleContext = React.createContext<Types.PartialSaleContextState>({});

export const SaleContextProvider: Component = ({ children }) => {
	const [startDate, setStartDate] = React.useState<string>(formatDateToAPI(14));
	const [endDate, setEndDate] = React.useState<string>(formatDateToAPI());

	const { data, error, loading } = useFetch<Types.Sale[]>(
		`https://data.origamid.dev/vendas/?inicio=${startDate}&final=${endDate}`
	);

	return (
		<SaleContext.Provider
			value={{
				data,
				loading,
				error,
				startDate,
				setStartDate,
				endDate,
				setEndDate,
			}}
		>
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
