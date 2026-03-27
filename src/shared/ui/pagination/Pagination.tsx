'use client';

import clsx from 'clsx';
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react';
import React from 'react';
import { Button } from '~/shared/ui/button';
import styles from './pagination.module.css';

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
	return (
		<nav
			role="navigation"
			aria-label="pagination"
			data-slot="pagination"
			className={clsx(styles.pagination, className)}
			{...props}
		/>
	);
}

function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>) {
	return (
		<ul data-slot="pagination-content" className={clsx(styles.content, className)} {...props} />
	);
}

function PaginationItem({ className, ...props }: React.ComponentProps<'li'>) {
	return <li data-slot="pagination-item" className={clsx(styles.item, className)} {...props} />;
}

type PaginationLinkProps = {
	isActive?: boolean;
} & React.ComponentProps<'a'> & {
		size?: React.ComponentProps<typeof Button>['size'];
	};

function PaginationLink({ className, isActive, size = 'icon', ...props }: PaginationLinkProps) {
	return (
		<Button asChild variant={isActive ? 'outline' : 'ghost'} size={size}>
			<a
				aria-current={isActive ? 'page' : undefined}
				data-active={isActive}
				className={clsx(styles.link, className)}
				{...props}
			/>
		</Button>
	);
}

function PaginationPrevious({
	className,
	text = 'Previous',
	...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
	return (
		<PaginationLink
			aria-label="Go to previous page"
			size="default"
			className={clsx(styles.prev, className)}
			{...props}
		>
			<ChevronLeftIcon />
			<span className={styles.text}>{text}</span>
		</PaginationLink>
	);
}

function PaginationNext({
	className,
	text = 'Next',
	...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
	return (
		<PaginationLink
			aria-label="Go to next page"
			size="default"
			className={clsx(styles.next, className)}
			{...props}
		>
			<span className={styles.text}>{text}</span>
			<ChevronRightIcon />
		</PaginationLink>
	);
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			aria-hidden
			data-slot="pagination-ellipsis"
			className={clsx(styles.ellipsis, className)}
			{...props}
		>
			<MoreHorizontalIcon />
			<span className="sr-only">More pages</span>
		</span>
	);
}

export {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
};
