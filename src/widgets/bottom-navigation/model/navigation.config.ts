import { Home, Search, User } from 'lucide-react';
import type { NavigationItem } from './navigation.types';

export const navigationItems: NavigationItem[] = [
	{
		label: 'Home',
		type: 'link',
		href: '/',
		icon: Home
	},
	{
		label: 'Catalog',
		type: 'action',
		action: 'openCatalog',
		icon: Search
	},
	{
		label: 'Profile',
		type: 'link',
		href: '/workspace',
		icon: User
	}
];
