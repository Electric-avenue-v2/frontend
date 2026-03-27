'use client';

import { ClientError, GraphQLClient, type RequestDocument, type Variables } from 'graphql-request';
import { configService } from '~/shared/config';

let isRefreshing = false;
let refreshPromise: Promise<boolean> | null = null;

const client = new GraphQLClient(configService.getOrThrow('NEXT_PUBLIC_GRAPHQL_ENDPOINT'), {
	requestMiddleware: request => ({
		...request,
		credentials: 'include'
	})
});

async function refreshTokens(): Promise<boolean> {
	try {
		const res = await fetch('/api/auth/refresh', {
			credentials: 'include',
			method: 'POST'
		});
		return res.ok;
	} catch {
		return false;
	}
}

function isUnauthenticatedError(error: unknown): boolean {
	if (error instanceof ClientError) {
		return (
			error.response.status === 401 ||
			error.response.errors?.some(e => e.extensions?.code === 'UNAUTHENTICATED') ||
			false
		);
	}
	return false;
}

export const clientFetcher = async <T, V extends Variables = Variables>(
	document: RequestDocument,
	variables?: V
): Promise<T> => {
	try {
		const result = variables
			? await client.request<T>(document, variables)
			: await client.request<T>(document);

		return result;
	} catch (error) {
		if (!isUnauthenticatedError(error)) {
			if (error instanceof ClientError) {
				throw new Error(error.response.errors?.[0]?.message || 'Server error');
			}
			throw error;
		}

		if (!isRefreshing) {
			isRefreshing = true;
			refreshPromise = refreshTokens().finally(() => {
				isRefreshing = false;
				refreshPromise = null;
			});
		}

		const success = await refreshPromise!;

		if (!success) {
			window.location.href = '/auth/login';
			throw error;
		}

		const result = variables
			? await client.request<T>(document, variables)
			: await client.request<T>(document);

		return result;
	}
};
