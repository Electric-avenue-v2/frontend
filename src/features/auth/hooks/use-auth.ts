'use client';

import { useQuery } from '@tanstack/react-query';
import { getMe } from '~/entities/user';

export function useAuth() {
	const { data, isLoading } = useQuery({
		queryKey: ['me'],
		queryFn: () => getMe(),
		retry: false,
		staleTime: 1000 * 60 * 5
	});

	return {
		user: data ?? null,
		isAuth: !!data,
		isLoading
	};
}
