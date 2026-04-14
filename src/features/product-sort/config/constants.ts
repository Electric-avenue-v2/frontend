import { ProductSort } from '~/shared/api/gql/graphql';

export const SORT_OPTIONS: Record<ProductSort, string> = {
	[ProductSort.Newest]: 'Newest',
	[ProductSort.PriceAsc]: 'Price: Low to High',
	[ProductSort.PriceDesc]: 'Price: High to Low',
	[ProductSort.Popular]: 'Most Popular'
};
