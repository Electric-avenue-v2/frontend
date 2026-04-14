import { graphql } from '~/shared/api/gql';

export const AddFavoriteDocument = graphql(`
	mutation AddFavorite($productId: String!) {
		addFavorite(productId: $productId)
	}
`);

export const RemoveFavoriteDocument = graphql(`
	mutation RemoveFavorite($productId: String!) {
		removeFavorite(productId: $productId)
	}
`);
