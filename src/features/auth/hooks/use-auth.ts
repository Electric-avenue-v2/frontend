'use client';

import { useQuery } from '@tanstack/react-query';
import { GetMeDocument } from '~/entities/user';
import { clientFetcher } from '~/shared/api/client-fetcher';

export function useAuth() {
	const { data, isLoading } = useQuery({
		queryKey: ['me'],
		queryFn: () => clientFetcher(GetMeDocument, undefined, { redirectOnUnauth: false }),
		retry: false,
		staleTime: 1000 * 60 * 5
	});

	return {
		user: data?.me ?? null,
		isAuth: !!data?.me,
		isLoading
	};
}
