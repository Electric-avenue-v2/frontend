'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import React from 'react';
import { Button } from '~/shared/ui/button';
import styles from './select.module.css';

function cx(...classes: (string | undefined | false)[]) {
	return classes.filter(Boolean).join(' ');
}

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
	return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
	return (
		<SelectPrimitive.Group
			data-slot="select-group"
			className={cx(styles.group, className)}
			{...props}
		/>
	);
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
	return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
	className,
	size = 'default',
	children,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
	size?: 'sm' | 'default';
}) {
	return (
		<Button asChild variant="secondary">
			<SelectPrimitive.Trigger
				data-slot="select-trigger"
				data-size={size}
				className={cx(
					styles.trigger,
					size === 'sm' ? styles.triggerSizeSm : styles.triggerSizeDefault,
					className
				)}
				{...props}
			>
				{children}
				<SelectPrimitive.Icon asChild>
					<ChevronDownIcon className={styles.triggerIcon} />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>
		</Button>
	);
}

function SelectContent({
	className,
	children,
	position = 'item-aligned',
	align = 'center',
	...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
	return (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				data-slot="select-content"
				data-align-trigger={position === 'item-aligned'}
				className={cx(styles.content, className)}
				position={position}
				align={align}
				{...props}
			>
				<SelectScrollUpButton />

				<SelectPrimitive.Viewport
					data-position={position}
					className={cx(styles.viewport, position === 'popper' && styles.viewportPopper)}
				>
					{children}
				</SelectPrimitive.Viewport>

				<SelectScrollDownButton />
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	);
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
	return (
		<SelectPrimitive.Label
			data-slot="select-label"
			className={cx(styles.label, className)}
			{...props}
		/>
	);
}

function SelectItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
	return (
		<SelectPrimitive.Item data-slot="select-item" className={cx(styles.item, className)} {...props}>
			<span className={styles.itemIndicator}>
				<SelectPrimitive.ItemIndicator>
					<CheckIcon className={styles.scrollButtonIcon} />
				</SelectPrimitive.ItemIndicator>
			</span>
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	);
}

function SelectSeparator({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
	return (
		<SelectPrimitive.Separator
			data-slot="select-separator"
			className={cx(styles.separator, className)}
			{...props}
		/>
	);
}

function SelectScrollUpButton({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
	return (
		<SelectPrimitive.ScrollUpButton
			data-slot="select-scroll-up-button"
			className={cx(styles.scrollButton, className)}
			{...props}
		>
			<ChevronUpIcon className={styles.scrollButtonIcon} />
		</SelectPrimitive.ScrollUpButton>
	);
}

function SelectScrollDownButton({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
	return (
		<SelectPrimitive.ScrollDownButton
			data-slot="select-scroll-down-button"
			className={cx(styles.scrollButton, className)}
			{...props}
		>
			<ChevronDownIcon className={styles.scrollButtonIcon} />
		</SelectPrimitive.ScrollDownButton>
	);
}

export {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectScrollDownButton,
	SelectScrollUpButton,
	SelectSeparator,
	SelectTrigger,
	SelectValue
};
