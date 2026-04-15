import 'server-only';
import type { CategoryProductsResponse } from '~/entities/product';
import type { CategoryProductsInput } from '~/shared/api/gql/graphql';
import { serverFetcher } from '~/shared/api/index.server';
import { CategoryProductsDocument } from './product.queries';

export async function getCategoryProducts(
	input: CategoryProductsInput
): Promise<CategoryProductsResponse> {
	const { categoryProducts } = await serverFetcher(CategoryProductsDocument, {
		input
	});

	return categoryProducts;
}
