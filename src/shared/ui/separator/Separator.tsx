'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import clsx from 'clsx';
import type { ComponentProps, FC, ReactNode } from 'react';
import styles from './separator.module.css';

const Separator: FC<ComponentProps<typeof SeparatorPrimitive.Root>> = ({
	className,
	orientation = 'horizontal',
	decorative = true,
	...props
}) => {
	return (
		<SeparatorPrimitive.Root
			data-slot="separator"
			decorative={decorative}
			orientation={orientation}
			className={clsx(styles.separator, className)}
			{...props}
		/>
	);
};

interface SeparatorWithTextProps {
	children: ReactNode;
	className?: string;
}

const SeparatorWithText: FC<SeparatorWithTextProps> = ({ children, className }) => {
	return (
		<div className={clsx(styles.container, className)}>
			<Separator className={styles.line} />

			<span className={styles.text}>{children}</span>

			<Separator className={styles.line} />
		</div>
	);
};

export { Separator, SeparatorWithText };
