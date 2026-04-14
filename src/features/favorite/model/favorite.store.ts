import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesStore {
	guestFavorites: string[];
	optimisticOverrides: Record<string, boolean>;

	toggleGuestFavorite: (productId: string) => void;
	setOverride: (productId: string, value: boolean) => void;
	removeOverride: (productId: string) => void;
	clearGuestFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
	persist(
		(set) => ({
			guestFavorites: [],
			optimisticOverrides: {},

			toggleGuestFavorite: (productId) => set((state) => {
				const exists = state.guestFavorites.includes(productId);
				return {
					guestFavorites: exists
						? state.guestFavorites.filter((id) => id !== productId)
						: [...state.guestFavorites, productId]
				};
			}),

			setOverride: (productId, value) => set((state) => ({
				optimisticOverrides: {
					...state.optimisticOverrides,
					[productId]: value
				}
			})),

			removeOverride: (productId) => set((state) => {
				const next = { ...state.optimisticOverrides };
				delete next[productId];
				return { optimisticOverrides: next };
			}),

			clearGuestFavorites: () => set({ guestFavorites: [] })
		}),
		{
			name: 'guest-favorites',
			partialize: (state) => ({
				guestFavorites: state.guestFavorites
			})
		}
	)
);
