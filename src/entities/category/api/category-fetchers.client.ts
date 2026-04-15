import 'client-only';
import { type CategoriesResponse } from '~/entities/category';
import { clientFetcher } from '~/shared/api';
import { GetCategoriesDocument } from './category.queries';

export const CATEGORIES_QUERY_KEY = 'categories';
export async function getCategories(): Promise<CategoriesResponse> {
	const { categories } = await clientFetcher(GetCategoriesDocument);
	return categories;
}
