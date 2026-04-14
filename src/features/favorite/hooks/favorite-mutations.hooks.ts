import { useMutation } from '@tanstack/react-query';
import { clientFetcher } from '~/shared/api/client-fetcher';
import {
	AddFavoriteDocument,
	RemoveFavoriteDocument,
	SyncFavoriteDocument
} from '../api/favorite.mutations';
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

export const useSyncFavoritesMutation = () => {
	return useMutation({
		mutationFn: async () => {
			const { guestFavorites } = useFavoritesStore.getState();

			if (guestFavorites.length === 0) {
				return false;
			}

			await clientFetcher(SyncFavoriteDocument, {
				input: { productIds: guestFavorites }
			});

			return true;
		},
		onSuccess: didSync => {
			if (didSync) {
				useFavoritesStore.getState().clearGuestFavorites();
			}
		}
	});
};
