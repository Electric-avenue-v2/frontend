import { graphql } from '~/shared/api/gql';

export const FavoriteProductsDocument = graphql(`
	query FavoriteProducts($input: FavoriteProductsInput!) {
		favoriteProducts(input: $input) {
			items {
				id
				title
				slug
				minPrice
				sellerId
				maxPrice
				inStock
				thumbnailUrl
				categorySlug
				categoryName
				isLiked
			}
			pagination {
				currentPage
				totalPages
				totalItems
				itemsPerPage
				hasNextPage
				hasPrevPage
			}
		}
	}
`);

export const GuestFavoriteProductsDocument = graphql(`
	query GuestFavoriteProducts($input: GuestFavoriteProductsInput!) {
		guestFavoriteProducts(input: $input) {
			items {
				id
				title
				slug
				sellerId
				minPrice
				maxPrice
				inStock
				thumbnailUrl
				categorySlug
				categoryName
				isLiked
			}
			pagination {
				currentPage
				totalPages
				totalItems
				itemsPerPage
				hasNextPage
				hasPrevPage
			}
		}
	}
`);
