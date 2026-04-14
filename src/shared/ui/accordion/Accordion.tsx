'use client';

import clsx from 'clsx';
import { ChevronDownIcon } from 'lucide-react';
import type { ComponentProps, FC, ReactNode } from 'react';
import styles from './accordion.module.css';

interface AccordionProps extends ComponentProps<'details'> {
	header: string | ReactNode;
	children: ReactNode;
}

export const Accordion: FC<AccordionProps> = ({ header, children, className, ...props }) => {
	return (
		<details className={clsx(styles.details, className)} {...props}>
			<summary className={styles.summary}>
				<span className={styles.header}>{header}</span>
				<ChevronDownIcon className={styles.icon} size={16} />
			</summary>
			<div className={styles.content}>{children}</div>
		</details>
	);
};
