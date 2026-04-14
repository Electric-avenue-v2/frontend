import type { Category } from '~/shared/api/gql/graphql';

export interface CategoryTreeItem extends Category {
	children: CategoryTreeItem[];
}