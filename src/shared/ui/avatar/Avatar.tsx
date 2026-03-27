'use client';

import { AvatarFallback as AvatarFallbackPrimitive, AvatarImage as AvatarImagePrimitive, Avatar as AvatarPrimitive } from '@radix-ui/react-avatar';
import clsx from 'clsx';
import React from 'react';
import styles from './avatar.module.css'

type AvatarSize = 'sm' | 'default' | 'lg';

function Avatar({
	className,
	size = 'default',
	...props
}: React.ComponentProps<typeof AvatarPrimitive> & { size?: AvatarSize }) {
	return (
		<AvatarPrimitive
			data-slot="avatar"
			data-size={size}
			className={clsx(styles.avatar, className)}
			{...props}
		/>
	);
}

function AvatarWrapper({ children }: { children: React.ReactNode }) {
	return <div className={styles.avatarWrapper}>{children}</div>;
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarImagePrimitive>) {
	return <AvatarImagePrimitive className={clsx(styles.avatarImage, className)} {...props} />;
}

function AvatarFallback({
	className,
	size = 'default',
	...props
}: React.ComponentProps<typeof AvatarFallbackPrimitive> & { size?: AvatarSize }) {
	return (
		<AvatarFallbackPrimitive
			data-size={size}
			className={clsx(styles.avatarFallback, className)}
			{...props}
		/>
	);
}

function AvatarBadge({
	className,
	size = 'default',
	...props
}: React.ComponentProps<'span'> & { size?: AvatarSize }) {
	return <span data-size={size} className={clsx(styles.avatarBadge, className)} {...props} />;
}

function AvatarGroup({ className, ...props }: React.ComponentProps<'div'>) {
	return <div className={clsx(styles.avatarGroup, className)} {...props} />;
}

function AvatarGroupCount({ className, ...props }: React.ComponentProps<'div'>) {
	return <div className={clsx(styles.avatarGroupCount, className)} {...props} />;
}

export { Avatar, AvatarWrapper, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount };
