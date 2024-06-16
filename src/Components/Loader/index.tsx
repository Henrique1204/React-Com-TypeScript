import React from 'react';

import * as Types from './types';

const loadingStyle: React.CSSProperties = {
	width: 'var(--gap)',
	height: 'var(--gap)',
	border: 'var(--gap-s) solid var(--color-1)',
	borderRadius: '50%',
	borderRightColor: 'transparent',

	animation: 'spin 1s infinite',
};

export const Loading: Component = ({}) => {
	return <div style={loadingStyle}></div>;
};

export const Loader: Component<Types.LoaderProps> = ({
	children,
	isLoading,
}) => {
	if (isLoading) return <Loading />;

	return <>{children}</>;
};
