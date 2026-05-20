import { graphql } from '~/shared/api/gql';

export const SearchProductsDocument = graphql(`
	query searchProducts($input: SearchProductsInput!) {
		searchProducts(input: $input) {
			items {
				id
				title
				slug
				minPrice
				maxPrice
				inStock
				thumbnailUrl
				sellerId
				categorySlug
				categoryName
			}
			pagination {
				currentPage
				totalPages
				totalItems
				itemsPerPage
				hasNextPage
				hasPrevPage
			}
			aggregations {
				attributes {
					slug
					name
					values {
						value
						count
					}
				}
				priceRange {
					min
					max
				}
			}
		}
	}
`);

export const CategoryProductsDocument = graphql(`
	query categoryProducts($input: CategoryProductsInput!) {
		categoryProducts(input: $input) {
			items {
				id
				title
				sellerId
				slug
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
			aggregations {
				attributes {
					slug
					name
					values {
						value
						count
					}
				}
				priceRange {
					min
					max
				}
			}
		}
	}
`);

export const ProductByIdDocument = graphql(`
	query Product($id: String!) {
		product(id: $id) {
			id
			title
			slug
			createdAt
			updatedAt
			minPrice
			maxPrice
			totalStock
			inStock
			thumbnailUrl
			description
			category {
				id
				name
				slug
				icon
			}
			seller {
				id
				firstName
				lastName
			}
			variants {
				id
				sku
				price
				stock
				productImages {
					id
					url
					publicId
				}
				attributes {
					name
					slug
					value
				}
			}
			productImages {
				id
				url
				publicId
			}
			specs {
				name
				slug
				value
			}
		}
	}
`);
