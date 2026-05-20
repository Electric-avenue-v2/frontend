import 'server-only';
import type { CategoryProductsInput, SearchProductsInput } from '~/shared/api/gql/graphql';
import { serverFetcher } from '~/shared/api/index.server';
import type {
	CategoryProductsResponse,
	ProductByIdResponse,
	SearchProductsResponse
} from '../model/product.types';
import {
	CategoryProductsDocument,
	ProductByIdDocument,
	SearchProductsDocument
} from './product.queries';

export async function getCategoryProducts(
	input: CategoryProductsInput
): Promise<CategoryProductsResponse> {
	const { categoryProducts } = await serverFetcher(CategoryProductsDocument, { input });
	return categoryProducts;
}

export async function getSearchProducts(
	input: SearchProductsInput
): Promise<SearchProductsResponse> {
	const { searchProducts } = await serverFetcher(SearchProductsDocument, { input });
	return searchProducts;
}

export async function getProductById(id: string): Promise<ProductByIdResponse> {
	const { product } = await serverFetcher(ProductByIdDocument, { id });
	return product;
}
