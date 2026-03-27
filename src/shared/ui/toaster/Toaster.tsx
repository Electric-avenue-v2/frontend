'use client';

import clsx from 'clsx';
import { CircleCheckIcon, InfoIcon, Loader2Icon, OctagonXIcon, TriangleAlertIcon } from 'lucide-react';
import React from 'react';
import { Toaster as Sonner, type ToasterProps } from 'sonner';
import styles from './toaster.module.css';

const Toaster = ({ ...props }: ToasterProps) => {
	return (
		<Sonner
			theme="light"
			className={styles.toaster}
			style={
				{
					'--normal-bg': 'var(--color-popover)',
					'--normal-text': 'var(--color-popover-fg)',
					'--normal-border': 'var(--border-3)',
					'--border-radius': 'var(--radius-md)',
				} as React.CSSProperties
			}
			icons={{
				success: <CircleCheckIcon className={styles.icon} />,
				info: <InfoIcon className={styles.icon} />,
				warning: <TriangleAlertIcon className={styles.icon} />,
				error: <OctagonXIcon className={styles.icon} />,
				loading: <Loader2Icon className={clsx(styles.icon, styles.spin)} />
			}}
			{...props}
		/>
	);
};

export { Toaster };
