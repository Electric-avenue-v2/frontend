import type { ResultOf } from '@graphql-typed-document-node/core';
import type { CategoryProductsDocument, SearchProductsDocument } from '../api/product.queries';

export type CategoryProductsResponse = ResultOf<
	typeof CategoryProductsDocument
>['categoryProducts'];

export type SearchProductsResponse = ResultOf<typeof SearchProductsDocument>['searchProducts'];
