'use client';

import { useQuery } from '@tanstack/react-query';
import { clientFetcher } from '~/shared/api/client-fetcher';
import { GetMeDocument } from '~/entities/user';

export function useAuth() {
	const { data, isLoading } = useQuery({
		queryKey: ['me'],
		queryFn: () => clientFetcher(GetMeDocument),
		retry: false,
		staleTime: 1000 * 60 * 5,
	});

	return {
		user: data?.me ?? null,
		isAuthenticated: !!data?.me,
		isLoading,
	};
}