export const handleFetchError = async (
	err: unknown,
	fallbackMessage = 'Unexpected error'
): Promise<string> => {
	if (err instanceof Response) {
		try {
			const data = await err.json();
			if (Array.isArray(data.message)) return data.message[0];
			else return data.message || fallbackMessage;
		} catch (e) {
			console.error(e);
			return fallbackMessage;
		}
	} else if (err instanceof Error) {
		return err.message || fallbackMessage;
	} else {
		return 'Network Error';
	}
};
