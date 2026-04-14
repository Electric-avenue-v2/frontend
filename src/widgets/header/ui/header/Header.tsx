'use client';

import { useState } from 'react';
import { CategoryModal } from '~/features/category';
import { SearchBar } from '~/features/search-bar';
import { Logo } from '~/shared/ui/logo';
import { HeaderActions } from '~/widgets/header/ui/header-actions/HeaderActions';
import { MobileMenu } from '~/widgets/header/ui/mobile-menu/MobileMenu';
import styles from './header.module.css';

export const Header = () => {
	const [isCatalogOpen, setCatalogOpen] = useState(false);

	return (
		<header className={styles.header}>
			<MobileMenu className={styles.mobileMenu} onOpenCategory={() => setCatalogOpen(true)} />
			<Logo className={styles.logo} />
			<div className={styles.categoryWrapper}>
				<CategoryModal
					open={isCatalogOpen}
					onOpenChange={setCatalogOpen}
					className={styles.categoryTrigger}
					shouldRenderTrigger
				/>
			</div>
			<div className={styles.searchBarWrapper}>
				<SearchBar className={styles.searchBar} />
			</div>
			<HeaderActions className={styles.headerActions} />
		</header>
	);
};
