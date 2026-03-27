'use client';

import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import React from 'react';
import styles from './badge.module.css';

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link';

interface BadgeProps extends React.ComponentProps<'span'> {
	variant?: BadgeVariant;
	asChild?: boolean;
}

function Badge({ className, variant = 'default', asChild = false, ...props }: BadgeProps) {
	const Comp = asChild ? Slot : 'span';

	return (
		<Comp
			data-slot="badge"
			data-variant={variant}
			className={clsx(styles.badge, styles[variant], className)}
			{...props}
		/>
	);
}

export { Badge };
