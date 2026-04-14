import type { ProductSort } from '~/shared/api/gql/graphql';
import { SORT_OPTIONS } from '~/features/product-sort/config/constants';

export const isProductSort = (value: string | null | undefined): value is ProductSort => {
	if (!value) return false;

	return value in SORT_OPTIONS;
};
