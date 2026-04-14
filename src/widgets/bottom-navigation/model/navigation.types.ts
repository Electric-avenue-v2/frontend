import { type LucideIcon } from 'lucide-react';
import { type Route } from 'next';

export type NavigationItem =
	| {
			label: string;
			type: 'link';
			href: Route;
			icon: LucideIcon;
	  }
	| {
			label: string;
			type: 'action';
			action: 'openCatalog';
			icon: LucideIcon;
	  };
