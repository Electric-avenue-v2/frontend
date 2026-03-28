import { type ReactNode } from 'react';
import { QueryProvider } from '~/app/providers/QueryProvider';

export function Providers({ children }: { children: ReactNode }) {
	return (
		<QueryProvider>
			{children}
		</QueryProvider>
	);
}
