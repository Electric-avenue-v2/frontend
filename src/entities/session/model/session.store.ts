import { createStore } from 'zustand/vanilla';
import type { SessionSchema, User } from './session.types';

export interface SessionActions {
	setUser: (user: User) => void;
	clearSession: () => void;
}

export type SessionStore = SessionSchema & SessionActions;

const defaultState: SessionSchema = {
	user: null,
	isAuthenticated: false,
	isLoading: false
};

export const createSessionStore = (initState: Partial<SessionSchema> = {}) => {
	return createStore<SessionStore>()(set => ({
		...defaultState,
		...initState,
		setUser: user => set({ user, isAuthenticated: true }),
		clearSession: () => set({ user: null, isAuthenticated: false })
	}));
};
