import type { ResultOf } from '@graphql-typed-document-node/core';
import type { CategoryProductsDocument } from '../api/product.queries';

export type CategoryProductsResponse = ResultOf<
	typeof CategoryProductsDocument
>['categoryProducts'];
