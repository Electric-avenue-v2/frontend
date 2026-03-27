'use client';

import { createContext, type ReactNode, useEffect, useState } from 'react';
import { createSessionStore } from '~/entities/session/model/session.store';
import { type SessionSchema } from '~/entities/session/model/session.types';

export type SessionStoreApi = ReturnType<typeof createSessionStore>;

export const SessionStoreContext = createContext<SessionStoreApi | undefined>(undefined);

interface SessionProviderProps {
	children: ReactNode;
	initialState: Partial<SessionSchema>;
}

export const SessionProvider = ({ children, initialState }: SessionProviderProps) => {
	const [store] = useState(() => createSessionStore(initialState));

	useEffect(() => {
		if (initialState.user) {
			store.getState().setUser(initialState.user);
		} else {
			store.getState().clearSession();
		}
	}, [initialState.user, store]);

	return <SessionStoreContext.Provider value={store}>{children}</SessionStoreContext.Provider>;
};
