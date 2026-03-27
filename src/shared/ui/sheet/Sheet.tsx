'use client';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { XIcon } from 'lucide-react';
import type { ComponentProps } from 'react';
import { useSwipeToClose } from '~/shared/ui/sheet/useSwipeToClose';
import styles from './sheet.module.css';

const Sheet = ({ ...props }: ComponentProps<typeof SheetPrimitive.Root>) => {
	return <SheetPrimitive.Root data-slot="sheet" {...props} />;
};

const SheetTrigger = ({ ...props }: ComponentProps<typeof SheetPrimitive.Trigger>) => {
	return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
};

const SheetClose = ({ ...props }: ComponentProps<typeof SheetPrimitive.Close>) => {
	return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
};

const SheetPortal = ({ ...props }: ComponentProps<typeof SheetPrimitive.Portal>) => {
	return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
};

const SheetOverlay = ({ className, ...props }: ComponentProps<typeof SheetPrimitive.Overlay>) => {
	return (
		<SheetPrimitive.Overlay
			data-slot="sheet-overlay"
			className={clsx(styles.overlay, className)}
			{...props}
		/>
	);
};

const SheetContent = ({
	className,
	children,
	onSwipeClose,
	side = 'right',
	...props
}: ComponentProps<typeof SheetPrimitive.Content> & {
	side?: 'top' | 'right' | 'bottom' | 'left';
	onSwipeClose?: () => void;
}) => {
	const { onTouchStart, onTouchEnd } = useSwipeToClose(side, onSwipeClose);

	return (
		<SheetPortal>
			<SheetOverlay />
			<SheetPrimitive.Content
				data-slot="sheet-content"
				className={clsx(
					styles.content,
					side === 'right' && styles.sideRight,
					side === 'left' && styles.sideLeft,
					side === 'top' && styles.sideTop,
					side === 'bottom' && styles.sideBottom,
					className
				)}
				onTouchStart={onTouchStart}
				onTouchEnd={onTouchEnd}
				{...props}
			>
				{children}
				<SheetPrimitive.Close className={styles.closeButton}>
					<XIcon className={styles.closeIcon} />
					<span className="sr-only">Close</span>
				</SheetPrimitive.Close>
			</SheetPrimitive.Content>
		</SheetPortal>
	);
};

const SheetHeader = ({ className, ...props }: ComponentProps<'div'>) => {
	return <div data-slot="sheet-header" className={clsx(styles.header, className)} {...props} />;
};

const SheetFooter = ({ className, ...props }: ComponentProps<'div'>) => {
	return <div data-slot="sheet-footer" className={clsx(styles.footer, className)} {...props} />;
};

const SheetTitle = ({ className, ...props }: ComponentProps<typeof SheetPrimitive.Title>) => {
	return (
		<SheetPrimitive.Title
			data-slot="sheet-title"
			className={clsx(styles.title, className)}
			{...props}
		/>
	);
};

const SheetDescription = ({
	className,
	...props
}: ComponentProps<typeof SheetPrimitive.Description>) => {
	return (
		<SheetPrimitive.Description
			data-slot="sheet-description"
			className={clsx(styles.description, className)}
			{...props}
		/>
	);
};

export {
	Sheet,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription
};
