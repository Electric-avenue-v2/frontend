'use client';

import clsx from 'clsx';
import React from 'react';
import styles from './card.module.css';

type CardSize = 'default' | 'sm';

function Card({
	className,
	size = 'default',
	...props
}: React.ComponentProps<'div'> & { size?: CardSize }) {
	return (
		<div data-slot="card" data-size={size} className={clsx(styles.card, className)} {...props} />
	);
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="card-header" className={clsx(styles.header, className)} {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="card-title" className={clsx(styles.title, className)} {...props} />;
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div data-slot="card-description" className={clsx(styles.description, className)} {...props} />
	);
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="card-action" className={clsx(styles.action, className)} {...props} />;
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="card-content" className={clsx(styles.content, className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="card-footer" className={clsx(styles.footer, className)} {...props} />;
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
