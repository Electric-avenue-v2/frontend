'use client';

import clsx from 'clsx';
import type { ComponentProps } from 'react';
import styles from './textarea.module.css';

function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
	return <textarea data-slot="textarea" className={clsx(styles.textarea, className)} {...props} />;
}

export { Textarea };
