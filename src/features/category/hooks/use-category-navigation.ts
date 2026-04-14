import { useState } from 'react';
import { type CategoryTreeItem } from '~/entities/category';

export const useCategoryNavigation = (root: CategoryTreeItem[]) => {
	const [stack, setStack] = useState<CategoryTreeItem[]>([]);

	const current = stack.at(-1) ?? null;
	const visibleCategories = current?.children ?? root;

	const goInto = (category: CategoryTreeItem) => {
		if (category.children.length > 0) {
			setStack(prev => [...prev, category]);
		}
	};

	const goBack = () => setStack(prev => prev.slice(0, -1));
	const reset = () => setStack([]);

	return { current, visibleCategories, goInto, goBack, reset };
};
