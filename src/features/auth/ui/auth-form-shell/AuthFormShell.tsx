import { type Route } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { type AuthMascotProps } from '~/features/auth/ui/auth-mascot/AuthMascot';
import { GoogleLoginButton } from '~/features/auth/ui/google-login-button/GoogleLoginButton';
import { SeparatorWithText } from '~/shared/ui/separator';
import { Skeleton } from '~/shared/ui/skeleton';
import { Typography } from '~/shared/ui/typography';
import styles from './auth-form-shell.module.css';

const AuthMascot = dynamic(
	() => import('~/features/auth/ui/auth-mascot/AuthMascot').then(mod => mod.AuthMascot),
	{
		ssr: false,
		loading: () => <Skeleton className={styles.mascotPlaceholder} />
	}
);

interface AuthFormShellProps {
	title: string;
	footerText: string;
	footerLinkText: string;
	footerLinkHref: Route;
	mascotProps: AuthMascotProps;
	children: ReactNode;
}

export const AuthFormShell: FC<AuthFormShellProps> = ({
	title,
	footerText,
	footerLinkText,
	footerLinkHref,
	mascotProps,
	children
}) => {
	return (
		<div className={styles.wrapper}>
			<Typography className={styles.title} align="center" variant="h6" as="h2">
				{title}
			</Typography>
			<AuthMascot {...mascotProps} />
			{children}
			<p className={styles.text}>
				{footerText}
				<Link href={footerLinkHref}>{footerLinkText}</Link>
			</p>
			<SeparatorWithText>or</SeparatorWithText>
			<GoogleLoginButton />
		</div>
	);
};
