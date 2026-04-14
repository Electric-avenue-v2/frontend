import { graphql } from '~/shared/api/gql';

export const GetCategoriesDocument = graphql(`
	query GetCategories {
		categories {
			id
			name
			slug
			icon
			parentId
		}
	}
`);

export const GetCategoryBySlug = graphql(`
	query GetCategoryBySlug($slug: String!) {
		categoryBySlug(slug: $slug) {
			id
			name
			slug
			icon
		}
	}
`)