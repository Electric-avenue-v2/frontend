import  { type ReactNode } from 'react';
import { Card } from '~/shared/ui/card';
import { Logo } from '~/shared/ui/logo';
import styles from './layout.module.css';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.content}>
			<div className={styles.logoWrapper}>
				<Logo />
			</div>

			<main className={styles.heroSection}>
				<Card className={styles.card}>{children}</Card>
			</main>
		</div>
	);
};

export default Layout;
