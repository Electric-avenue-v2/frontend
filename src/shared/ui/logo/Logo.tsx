import { Zap } from 'lucide-react';
import { type Route } from 'next';
import Link from 'next/link';
import type { FC } from 'react';
import styles from './logo.module.css';

interface LogoProps {
	href?: Route;
}

export const Logo: FC<LogoProps> = ({ href = '/' }) => {
	return (
		<Link href={href} className={styles.logoLink}>
			<div className={styles.iconWrapper}>
				<Zap className={styles.icon} />
			</div>
			<span className={styles.textBase}>
				Electric
				<span className={styles.textHighlight}>Avenue</span>
			</span>
		</Link>
	);
};
