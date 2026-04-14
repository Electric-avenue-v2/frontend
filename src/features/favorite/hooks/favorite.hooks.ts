import { useFavoritesStore } from '../model/favorite.store';

export const useProductLikeStatus = (
	productId: string,
	isAuth: boolean,
	serverState = false
): boolean => {
	return useFavoritesStore(state => {
		const override = state.optimisticOverrides[productId];

		if (override !== undefined) {
			return override;
		}

		if (isAuth) {
			return serverState;
		}

		return state.guestFavorites.includes(productId);
	});
};