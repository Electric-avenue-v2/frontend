'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { CheckIcon } from 'lucide-react';
import * as React from 'react';
import styles from './checkbox.module.css';

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={clsx(styles.checkbox, className)}
			{...props}
		>
			<CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className={styles.indicator}>
				<CheckIcon />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
}

export { Checkbox };
