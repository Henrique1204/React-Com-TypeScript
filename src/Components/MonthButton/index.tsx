import React from 'react';

import * as Types from './types';

const style: React.CSSProperties = {
	padding: 'var(--gap) var(--gap-s)',
	border: 'none',
	borderRadius: 'var(--gap)',
	fontWeight: '600',
	textTransform: 'capitalize',
	color: 'var(--color-2)',
	backgroundColor: 'var(--color-3)',
};

const MonthButton: Component<Types.MonthButtonProps> = ({
	monthName,
	onClick,
}) => {
	return (
		<button style={style} onClick={onClick}>
			{monthName}
		</button>
	);
};

export default MonthButton;
