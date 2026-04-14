import type { FC } from 'react';
import { type CategoryTreeItem } from '~/entities/category';
import { CategoryItem } from '../category-item/CategoryItem';
import styles from './category-list.module.css';

interface CategoryListProps {
	categories: CategoryTreeItem[];
	onSelect: (category: CategoryTreeItem) => void;
	onOpenChange: (value: boolean) => void;
}

export const CategoryList: FC<CategoryListProps> = ({ categories, onSelect, onOpenChange }) => (
	<ul className={styles.list}>
		{categories.map(cat => (
			<li key={cat.id}>
				<CategoryItem category={cat} onClick={onSelect} onOpenChange={onOpenChange} />
			</li>
		))}
	</ul>
);
