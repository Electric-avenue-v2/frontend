import { create } from 'zustand';

type CategoryModalState = {
	isOpen: boolean;
	setOpen: (value: boolean) => void;
};

export const useCategoryModalStore = create<CategoryModalState>((set) => ({
	isOpen: false,
	setOpen: (value) => set({ isOpen: value }),
}));