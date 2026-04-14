import type { ReactNode } from 'react';
import { BottomNavigation } from '~/widgets/bottom-navigation';
import { Header } from '~/widgets/header';
import styles from './styles.module.css';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>{children}</main>
			<div className={styles.bottomNavWrapper}>
				<BottomNavigation />
			</div>
			{/*<footer></footer>*/}
		</div>
	);
};

export default Layout;
