import { useMutation } from '@tanstack/react-query';
import { clientFetcher } from '~/shared/api/client-fetcher';
import { AddFavoriteDocument, RemoveFavoriteDocument } from '../api/favorite.mutations';
import { useFavoritesStore } from '../model/favorite.store';

interface ToggleVariables {
	productId: string;
	nextState: boolean;
}

export const useToggleFavoriteMutation = () => {
	const setOverride = useFavoritesStore(state => state.setOverride);
	const removeOverride = useFavoritesStore(state => state.removeOverride);

	return useMutation({
		mutationFn: async ({ productId, nextState }: ToggleVariables) => {
			if (nextState) {
				await clientFetcher(AddFavoriteDocument, { productId });
			} else {
				await clientFetcher(RemoveFavoriteDocument, { productId });
			}
		},
		onMutate: ({ productId, nextState }) => {
			setOverride(productId, nextState);
		},
		onError: (_, variables) => {
			removeOverride(variables.productId);
		}
	});
};
