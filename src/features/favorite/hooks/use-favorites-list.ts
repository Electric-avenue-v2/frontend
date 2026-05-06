import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { clientFetcher } from '~/shared/api';
import type { FavoriteProductsResult } from '~/shared/api/gql/graphql';
import { FavoriteProductsDocument, GuestFavoriteProductsDocument } from '../api/favorite.queries';
import { useFavoritesStore } from '../model/favorite.store';

interface UseFavoritesListParams {
	isAuth: boolean;
	page: number;
	limit: number;
}

export const useFavoritesList = ({ isAuth, page, limit }: UseFavoritesListParams) => {
	const guestFavorites = useFavoritesStore(state => state.guestFavorites);

	return useQuery<FavoriteProductsResult>({
		queryKey: ['favorites-list', { isAuth, page, limit, guestCount: guestFavorites.length }],
		queryFn: async () => {
			if (isAuth) {
				const response = await clientFetcher(FavoriteProductsDocument, {
					input: { page, limit }
				});

				return response.favoriteProducts;
			}

			const response = await clientFetcher(GuestFavoriteProductsDocument, {
				input: {
					productIds: guestFavorites,
					page,
					limit
				}
			});

			return response.guestFavoriteProducts;
		},
		placeholderData: keepPreviousData
	});
};
