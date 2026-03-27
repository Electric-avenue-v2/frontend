import { useContext } from 'react';
import { useStore } from 'zustand';
import type { SessionStore } from '~/entities/session/model/session.store';
import { SessionStoreContext } from '~/entities/session/ui/session.provider';

export const useSessionStore = <T>(selector: (store: SessionStore) => T): T => {
	const context = useContext(SessionStoreContext);

	if (!context) {
		throw new Error('useSessionStore must be used within SessionProvider');
	}

	return useStore(context, selector);
};
