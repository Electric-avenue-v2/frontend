import { graphql } from '~/shared/api';

export const GetSearchSuggestionsDocument = graphql(`
	query SearchSuggestions($input: SearchSuggestionsInput!) {
		searchSuggestions(input: $input) {
			id,
			title
			slug
			categorySlug
			categoryName
		}
	}
`)