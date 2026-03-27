'use client';

import clsx from 'clsx';
import React from 'react';
import styles from './skeleton.module.css';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="skeleton" className={clsx(styles.skeleton, className)} {...props} />;
}

export { Skeleton };
