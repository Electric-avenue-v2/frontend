import { type ReactNode } from 'react';
import { GoogleAuthProvider } from '~/app/providers/GoogleAuthProvider';
import { QueryProvider } from '~/app/providers/QueryProvider';

export function Providers({ children }: { children: ReactNode }) {
	return (
		<QueryProvider>
			<GoogleAuthProvider>{children}</GoogleAuthProvider>
		</QueryProvider>
	);
}
