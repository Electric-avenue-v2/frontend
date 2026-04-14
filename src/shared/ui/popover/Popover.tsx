'use client';

import * as PopoverPrimitive from '@radix-ui/react-popover';
import clsx from 'clsx';
import React from 'react';
import styles from './popover.module.css';

function Popover(props: React.ComponentProps<typeof PopoverPrimitive.Root>) {
	return <PopoverPrimitive.Root {...props} />;
}

function PopoverTrigger(props: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
	return <PopoverPrimitive.Trigger {...props} />;
}

function PopoverContent({
	className,
	align = 'center',
	sideOffset = 4,
	...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
	return (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content
				align={align}
				sideOffset={sideOffset}
				className={clsx(styles.popoverContent, className)}
				{...props}
			/>
		</PopoverPrimitive.Portal>
	);
}

function PopoverAnchor(props: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
	return <PopoverPrimitive.Anchor {...props} />;
}

function PopoverHeader({ className, ...props }: React.ComponentProps<'div'>) {
	return <div className={clsx(styles.header, className)} {...props} />;
}

function PopoverTitle({ className, ...props }: React.ComponentProps<'div'>) {
	return <div className={clsx(styles.title, className)} {...props} />;
}

function PopoverDescription({ className, ...props }: React.ComponentProps<'p'>) {
	return <p className={clsx(styles.description, className)} {...props} />;
}

export {
	Popover,
	PopoverAnchor,
	PopoverContent,
	PopoverDescription,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger
};
