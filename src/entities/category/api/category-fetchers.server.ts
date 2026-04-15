import 'server-only';
import type { CategoryBySlugResponse } from '~/entities/category';
import { serverFetcher } from '~/shared/api/index.server';
import { GetCategoryBySlug } from './category.queries';

export async function getCategoryBySlug(slug: string): Promise<CategoryBySlugResponse> {
	const { categoryBySlug } = await serverFetcher(GetCategoryBySlug, {
		slug
	});

	return categoryBySlug;
}
