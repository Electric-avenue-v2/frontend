import { useQuery } from '@tanstack/react-query';
import { GetSearchSuggestionsDocument } from '~/features/search-bar/api/suggestion.queries';
import { clientFetcher } from '~/shared/api';

export const useSuggestions = (query: string) => {
	return useQuery({
		queryKey: ['suggestions', query],
		queryFn: () =>
			clientFetcher(GetSearchSuggestionsDocument, {
				input: { query }
			}),
		enabled: query.trim().length >= 2
	});
};
