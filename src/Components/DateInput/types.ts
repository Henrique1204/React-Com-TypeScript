import React from 'react';

export type DateInputProps = Omit<React.ComponentProps<'input'>, 'onChange'> & {
	label: string;
	onChange?: React.Dispatch<React.SetStateAction<string>>;
};
