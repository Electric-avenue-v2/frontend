'use client';

import clsx from 'clsx';
import { type ComponentProps, type ReactNode, useMemo } from 'react';
import { Label } from '~/shared/ui/label';
import { Separator } from '~/shared/ui/separator';
import styles from './field.module.css';

function FieldSet({ className, ...props }: ComponentProps<'fieldset'>) {
	return <fieldset data-slot="field-set" className={clsx(styles.fieldSet, className)} {...props} />;
}

function FieldLegend({
	className,
	variant = 'legend',
	...props
}: ComponentProps<'legend'> & { variant?: 'legend' | 'label' }) {
	return (
		<legend
			data-slot="field-legend"
			data-variant={variant}
			className={clsx(styles.fieldLegend, className)}
			{...props}
		/>
	);
}

function FieldGroup({ className, ...props }: ComponentProps<'div'>) {
	return <div data-slot="field-group" className={clsx(styles.fieldGroup, className)} {...props} />;
}

function Field({
	className,
	...props
}: ComponentProps<'div'>) {
	return (
		<div
			role="group"
			data-slot="field"
			className={clsx(styles.field, className)}
			{...props}
		/>
	);
}

function FieldContent({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div data-slot="field-content" className={clsx(styles.fieldContent, className)} {...props} />
	);
}

function FieldLabel({ className, ...props }: ComponentProps<typeof Label>) {
	return (
		<Label data-slot="field-label" className={clsx(styles.fieldLabel, className)} {...props} />
	);
}

function FieldTitle({ className, ...props }: ComponentProps<'div'>) {
	return <div data-slot="field-title" className={clsx(styles.fieldTitle, className)} {...props} />;
}

function FieldDescription({ className, ...props }: ComponentProps<'p'>) {
	return (
		<p
			data-slot="field-description"
			className={clsx(styles.fieldDescription, className)}
			{...props}
		/>
	);
}

function FieldSeparator({
	children,
	className,
	...props
}: ComponentProps<'div'> & {
	children?: ReactNode;
}) {
	return (
		<div
			data-slot="field-separator"
			data-content={Boolean(children)}
			data-testid="field-separator"
			className={clsx(styles.fieldSeparator, className)}
			{...props}
		>
			<Separator className={styles.separatorLine} />
			{children ? (
				<span className={styles.separatorContent} data-slot="field-separator-content">
					{children}
				</span>
			) : null}
		</div>
	);
}

function FieldError({
	className,
	children,
	errors,
	...props
}: ComponentProps<'div'> & {
	errors?: Array<{ message?: string } | undefined>;
}) {
	const content = useMemo(() => {
		if (children) {
			return children;
		}

		if (!errors?.length) {
			return null;
		}

		const validErrors = errors.filter(
			(err): err is { message: string } => typeof err?.message === 'string'
		);

		const uniqueErrors = [...new Map(validErrors.map(error => [error.message, error])).values()];

		if (uniqueErrors.length === 1 && uniqueErrors[0]) {
			return uniqueErrors[0].message;
		}

		return (
			<ul className={styles.errorList}>
				{uniqueErrors.map((error, index) => (
					<li key={index}>{error.message}</li>
				))}
			</ul>
		);
	}, [children, errors]);

	if (!content) {
		return null;
	}

	return (
		<div
			role="alert"
			data-slot="field-error"
			className={clsx(styles.fieldError, className)}
			{...props}
		>
			{content}
		</div>
	);
}

export {
	Field,
	FieldContent,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSeparator,
	FieldSet,
	FieldTitle
};
