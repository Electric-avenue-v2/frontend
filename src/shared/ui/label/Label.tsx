'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import styles from './label.module.css';

const Label: FC<ComponentProps<typeof LabelPrimitive.Root>> = ({ className, ...props }) => {
	return (
		<LabelPrimitive.Root data-slot="label" className={clsx(styles.label, className)} {...props} />
	);
};

export { Label };
