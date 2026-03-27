'use client';

import clsx from 'clsx';
import { Command as CommandPrimitive } from 'cmdk';
import { CheckIcon, SearchIcon } from 'lucide-react';
import React from 'react';
import styles from './command.module.css';

function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
	return <CommandPrimitive className={clsx(styles.command, className)} {...props} />;
}

function CommandInput({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
	return (
		<div className={styles.inputWrapper}>
			<SearchIcon className={styles.icon} />
			<CommandPrimitive.Input className={clsx(styles.input, className)} {...props} />
		</div>
	);
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
	return <CommandPrimitive.List className={clsx(styles.list, className)} {...props} />;
}

function CommandEmpty({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
	return <CommandPrimitive.Empty className={clsx(styles.empty, className)} {...props} />;
}

function CommandGroup({
	heading,
	children,
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.Group> & {
	heading?: string;
}) {
	return (
		<CommandPrimitive.Group className={clsx(styles.group, className)} {...props}>
			{heading && <div className={styles.groupHeading}>{heading}</div>}
			{children}
		</CommandPrimitive.Group>
	);
}

function CommandSeparator({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
	return (
		<CommandPrimitive.Separator
			aria-hidden="true"
			className={clsx(styles.separator, className)}
			{...props}
		/>
	);
}

function CommandItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
	return (
		<CommandPrimitive.Item className={clsx(styles.item, className)} {...props}>
			{children}
			<CheckIcon className={styles.check} />
		</CommandPrimitive.Item>
	);
}

function CommandShortcut({ className, ...props }: React.ComponentProps<'span'>) {
	return <span className={clsx(styles.shortcut, className)} {...props} />;
}

export {
	Command,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandSeparator,
	CommandItem,
	CommandShortcut
};
