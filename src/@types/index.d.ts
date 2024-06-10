import React from 'react';

declare global {
	export type DefaultProps = {
		testId?: string;
		className?: string;
		children?: React.ReactNode;
	};

	export interface Component<T = {}> extends React.FC<DefaultProps & T> {}
}
