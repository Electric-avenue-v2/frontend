import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface GuestFavoriteItem {
	productId: string;
	addedAt: number;
}

interface FavoritesStore {
	guestFavorites: GuestFavoriteItem[];
	optimisticOverrides: Record<string, boolean>;

	getGuestProductIds: () => string[];
	toggleGuestFavorite: (productId: string) => void;
	setOverride: (productId: string, value: boolean) => void;
	removeOverride: (productId: string) => void;
	clearGuestFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
	persist(
		(set, get) => ({
			guestFavorites: [],
			optimisticOverrides: {},

			toggleGuestFavorite: productId =>
				set(state => {
					const exists = state.guestFavorites.some(item => item.productId === productId);

					return {
						guestFavorites: exists
							? state.guestFavorites.filter(item => item.productId !== productId)
							: [...state.guestFavorites, { productId, addedAt: Date.now() }]
					};
				}),

			setOverride: (productId, value) =>
				set(state => ({
					optimisticOverrides: {
						...state.optimisticOverrides,
						[productId]: value
					}
				})),

			removeOverride: productId =>
				set(state => {
					const next = { ...state.optimisticOverrides };
					delete next[productId];
					return { optimisticOverrides: next };
				}),

			clearGuestFavorites: () => set({ guestFavorites: [] }),

			getGuestProductIds: () => get().guestFavorites.map(item => item.productId)
		}),
		{
			name: 'guest-favorites',
			partialize: state => ({
				guestFavorites: state.guestFavorites
			})
		}
	)
);
