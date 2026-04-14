'use client';

import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { CategoryModal } from '~/features/category';
import { useBottomNavigation } from '../../hooks/use-bottom-navigation';
import styles from './bottom-navigation.module.css';

type BottomNavigationProps = ComponentProps<'nav'>;

export const BottomNavigation: FC<BottomNavigationProps> = ({ className, ...props }) => {
	const { items, handleClick, isItemActive, isCatalogOpen, setCatalogOpen } = useBottomNavigation();

	return (
		<>
			<nav className={clsx(styles.container, className)} {...props}>
				{items.map(item => {
					const Icon = item.icon;

					return (
						<button
							key={item.label}
							onClick={() => handleClick(item)}
							className={clsx(
								styles.item,
								isItemActive(item) && styles.active,
								item.type === 'action' && styles.action
							)}
						>
							<Icon className={styles.icon} />
							<span className={styles.label}>{item.label}</span>
						</button>
					);
				})}
			</nav>

			<CategoryModal open={isCatalogOpen} onOpenChange={setCatalogOpen} />
		</>
	);
};
