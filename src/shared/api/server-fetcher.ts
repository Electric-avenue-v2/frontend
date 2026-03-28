import 'server-only';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { ClientError, GraphQLClient, type Variables } from 'graphql-request';
import { cookies } from 'next/headers';
import { configService } from '~/shared/config';

export const serverFetcher = async <T, V extends Variables = Variables>(
	document: TypedDocumentNode<T, V>,
	variables?: V
): Promise<T> => {
	const cookieStore = await cookies();

	const client = new GraphQLClient(configService.getOrThrow('NEXT_PUBLIC_GRAPHQL_ENDPOINT'), {
		headers: {
			Cookie: cookieStore.toString()
		}
	});

	try {
		const result = variables
			? await client.request<T>(document, variables)
			: await client.request<T>(document);

		return result;
	} catch (error) {
		if (error instanceof ClientError) {
			throw new Error(error.response.errors?.[0]?.message || 'Server error');
		}
		throw error;
	}
};
