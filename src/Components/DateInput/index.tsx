import React from 'react';

import * as Types from './types';

const generaltyle: React.CSSProperties = {
	padding: 'var(--gap-s) 0.75rem',
	borderRadius: 'var(--gap)',
	fontSize: '1rem',
	color: 'var(--color-2',
	backgroundColor: 'var(--color-4)',
};

const labelStyle: React.CSSProperties = {
	marginBottom: 'var(--gap-s)',
	fontWeight: '600',
	display: 'block',
	...generaltyle,
};

const inputStyle: React.CSSProperties = {
	border: 'none',
	fontFamily: 'monospace',
	...generaltyle,
};

const DateInput: Component<Types.DateInputProps> = ({
	label,
	onChange,
	...props
}) => {
	const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = ({
		target,
	}) => {
		onChange?.(target.value || '');
	};

	return (
		<div>
			<label style={labelStyle}>{label}</label>

			<input
				style={inputStyle}
				type='date'
				onChange={handleOnChange}
				{...props}
			/>
		</div>
	);
};

export default DateInput;
