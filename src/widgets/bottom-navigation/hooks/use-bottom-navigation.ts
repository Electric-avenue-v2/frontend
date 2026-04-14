'use client';

import { usePathname, useRouter } from 'next/navigation';
import { navigationItems } from '../model/navigation.config';
import { useState } from 'react';

export const useBottomNavigation = () => {
	const pathname = usePathname();
	const router = useRouter();
	const [isCatalogOpen, setCatalogOpen] = useState(false);

	const handleClick = (item: (typeof navigationItems)[number]) => {
		if (item.type === 'link') {
			setCatalogOpen(false);
			router.push(item.href);
			return;
		}

		if (item.type === 'action' && item.action === 'openCatalog') {
			setCatalogOpen(true);
		}
	};

	const isItemActive = (item: (typeof navigationItems)[number]) => {
		if (item.type === 'link') return pathname === item.href;
		if (item.type === 'action') return isCatalogOpen;
		return false;
	};

	return {
		items: navigationItems,
		isCatalogOpen,
		setCatalogOpen,
		handleClick,
		isItemActive
	};
};
