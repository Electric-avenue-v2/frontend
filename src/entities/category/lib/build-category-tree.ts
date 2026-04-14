import { type CategoryTreeItem } from '~/entities/category';
import type { Category } from '~/shared/api/gql/graphql';

export const buildCategoryTree = (raw: Category[]): CategoryTreeItem[] => {
	const map = new Map<string, CategoryTreeItem>(
		raw.map(item => [item.id, { ...item, children: [] }])
	);

	const roots: CategoryTreeItem[] = [];

	for (const item of raw) {
		const node = map.get(item.id)!;
		if (item.parentId) {
			map.get(item.parentId)?.children.push(node);
		} else {
			roots.push(node);
		}
	}

	return roots;
};
