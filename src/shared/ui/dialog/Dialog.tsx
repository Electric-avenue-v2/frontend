'use client';

import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { XIcon } from 'lucide-react';
import React from 'react';
import { type ComponentProps, createContext, type ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from './dialog.module.css';

type DialogContextType = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

const DialogContext = createContext<DialogContextType | null>(null);

function Dialog({
	children,
	open: controlledOpen,
	onOpenChange
}: {
	children: ReactNode;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}) {
	const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
	const isControlled = controlledOpen !== undefined;
	const open = isControlled ? controlledOpen : uncontrolledOpen;

	const setOpen = useCallback(
		(newOpen: boolean) => {
			if (!isControlled) {
				setUncontrolledOpen(newOpen);
			}
			onOpenChange?.(newOpen);
		},
		[isControlled, onOpenChange]
	);

	return <DialogContext.Provider value={{ open, setOpen }}>{children}</DialogContext.Provider>;
}

function useDialog() {
	const ctx = useContext(DialogContext);
	if (!ctx) {
		throw new Error('useDialog must be used inside <Dialog>');
	}
	return ctx;
}

function DialogTrigger({ asChild, ...props }: ComponentProps<'button'> & { asChild?: boolean }) {
	const { setOpen } = useDialog();
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			{...props}
			onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
				setOpen(true);
				props.onClick?.(e);
			}}
		/>
	);
}

function DialogClose({ asChild, ...props }: ComponentProps<'button'> & { asChild?: boolean }) {
	const { setOpen } = useDialog();
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			{...props}
			onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
				setOpen(false);
				props.onClick?.(e);
			}}
		/>
	);
}

function DialogContent({ className, children, ...props }: ComponentProps<'dialog'>) {
	const { open, setOpen } = useDialog();
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (open && !dialog.open) {
			dialog.showModal();
		} else if (!open && dialog.open) {
			dialog.close();
		}
	}, [open]);

	const handleClose = () => {
		setOpen(false);
	};

	const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
		if (e.target === e.currentTarget) {
			setOpen(false);
		}
		props.onClick?.(e);
	};

	return (
		<dialog
			ref={dialogRef}
			className={clsx(styles.dialog, className)}
			onClose={handleClose}
			onClick={handleBackdropClick}
			role="dialog"
			aria-modal="true"
			{...props}
		>
			<div className={styles.content}>
				{children}
				<button
					type="button"
					className={styles.closeButton}
					onClick={handleClose}
					aria-label="Close"
				>
					<XIcon className={styles.closeIcon} />
				</button>
			</div>
		</dialog>
	);
}

function DialogHeader({ className, ...props }: ComponentProps<'div'>) {
	return <div className={clsx(styles.header, className)} {...props} />;
}

function DialogFooter({ className, ...props }: ComponentProps<'div'>) {
	return <div className={clsx(styles.footer, className)} {...props} />;
}

function DialogTitle({ className, ...props }: ComponentProps<'h2'>) {
	return <h2 className={clsx(styles.title, className)} {...props} />;
}

function DialogDescription({ className, ...props }: ComponentProps<'p'>) {
	return <p className={clsx(styles.description, className)} {...props} />;
}

export {
	Dialog,
	DialogTrigger,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription
};
