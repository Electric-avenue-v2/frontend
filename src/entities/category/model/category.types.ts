import type { ResultOf } from '@graphql-typed-document-node/core';
import type { Category } from '~/shared/api/gql/graphql';
import type { GetCategoriesDocument, GetCategoryBySlug } from '../api/category.queries';

export interface CategoryTreeItem extends Category {
	children: CategoryTreeItem[];
}

export type CategoriesResponse = ResultOf<typeof GetCategoriesDocument>['categories'];
export type CategoryBySlugResponse = ResultOf<typeof GetCategoryBySlug>['categoryBySlug'];
