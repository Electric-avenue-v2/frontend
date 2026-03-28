import type { Metadata } from 'next';
import { type ReactNode } from 'react';
import { GoogleAuthProvider } from '~/app/providers';
import { Card } from '~/shared/ui/card';
import { Logo } from '~/shared/ui/logo';
import styles from './layout.module.css';

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false
	}
};

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		// <GoogleAuthProvider>
			<div className={styles.content}>
				<div className={styles.logoWrapper}>
					<Logo />
				</div>

				<main className={styles.heroSection}>
					<Card className={styles.card}>{children}</Card>
				</main>
			</div>
		// </GoogleAuthProvider>
	);
};

export default Layout;
