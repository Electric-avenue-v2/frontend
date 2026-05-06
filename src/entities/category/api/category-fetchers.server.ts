import 'server-only';
import type { CategoryBySlugResponse } from '~/entities/category';
import type { GetSitemapCategoriesQuery } from '~/shared/api/gql/graphql';
import { serverFetcher } from '~/shared/api/index.server';
import { GetCategoryBySlug, GetSitemapCategories } from './category.queries';

export async function getCategoryBySlug(slug: string): Promise<CategoryBySlugResponse> {
	const { categoryBySlug } = await serverFetcher(GetCategoryBySlug, {
		slug
	});

	return categoryBySlug;
}

export async function getSitemapCategories(): Promise<
	GetSitemapCategoriesQuery['sitemapCategories']
> {
	const { sitemapCategories } = await serverFetcher(GetSitemapCategories);
	return sitemapCategories;
}
