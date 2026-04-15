import 'client-only';
import { clientFetcher } from '~/shared/api';
import { GetMeDocument } from '../api/user.queries';
import { type MeResponse } from '../model/user.types';

export async function getMe(redirectOnUnauth = false): Promise<MeResponse> {
	const { me } = await clientFetcher(GetMeDocument, undefined, { redirectOnUnauth });
	return me;
}
