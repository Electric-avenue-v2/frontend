import clsx from 'clsx';
import { Zap } from 'lucide-react';
import { type Route } from 'next';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import { Typography } from '~/shared/ui/typography';
import styles from './logo.module.css';

interface LogoProps extends Omit<ComponentProps<typeof Link>, 'href'> {
	href?: Route;
}

export const Logo: FC<LogoProps> = ({ href = '/', className, ...props }) => {
	return (
		<Link href={href} className={clsx(styles.logoLink, className)} {...props}>
			<div className={styles.iconWrapper}>
				<Zap className={styles.icon} />
			</div>
			<Typography variant="body" as="span" className={styles.textBase}>
				Electric
				<Typography variant="body" as="span" className={styles.textHighlight}>
					Avenue
				</Typography>
			</Typography>
		</Link>
	);
};
