import 'server-only';

class SessionApi {
	// getSession = cache(async (): Promise<User | null> => {
	// try {
	// 	const res = await fetchData<User>('/users/me', {
	// 		cache: 'no-store'
	// 	});
	//
	// 	// return res;
	// 	return null
	// } catch (e) {
	// 	console.error(e);
	// 	return null;
	// }
	// });
}

export const sessionApi = new SessionApi();
