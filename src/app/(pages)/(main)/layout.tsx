import type { ReactNode } from 'react';
// import { Header } from '~/widgets/header/ui/Header';
import styles from './styles.module.css'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			{/*<Header />*/}
			<main className={styles.main}>{children}</main>
			{/*<footer></footer>*/}
		</>
	);
};

export default Layout;
