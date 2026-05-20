import type { ResultOf } from '@graphql-typed-document-node/core';
import type {
	CategoryProductsDocument,
	ProductByIdDocument,
	SearchProductsDocument
} from '../api/product.queries';

export type CategoryProductsResponse = ResultOf<
	typeof CategoryProductsDocument
>['categoryProducts'];

export type SearchProductsResponse = ResultOf<typeof SearchProductsDocument>['searchProducts'];
export type ProductByIdResponse = ResultOf<typeof ProductByIdDocument>['product'];
