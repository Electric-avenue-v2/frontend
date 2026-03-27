import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import styles from './input.module.css';

export const Input: FC<ComponentProps<'input'>> = ({ className, ...props }) => {
	return (
		<input data-slot="input" className={clsx(styles.input, className)} {...props} />
	);
};
