import 'server-only';
import { cookies } from 'next/headers';

export const isAuthenticated = async () => {
	const cookieStore = await cookies();
	return cookieStore.has('accessToken');
};
