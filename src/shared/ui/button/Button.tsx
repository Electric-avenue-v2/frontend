'use client';

import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import type { ButtonHTMLAttributes, FC } from 'react';
import styles from './button.module.css';

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant;
	size?: ButtonSize;
	asChild?: boolean;
};

export const Button: FC<ButtonProps> = ({
	className,
	variant = 'default',
	size = 'default',
	asChild = false,
	...props
}) => {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={clsx(styles.button, className)}
			{...props}
		/>
	);
};
