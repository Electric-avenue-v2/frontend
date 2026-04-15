import 'server-only';
import { serverFetcher } from '~/shared/api/index.server';
import { GetMeDocument } from '../api/user.queries';
import { type MeResponse } from '../model/user.types';

export async function getMe(): Promise<MeResponse> {
	const { me } = await serverFetcher(GetMeDocument);
	return me;
}
