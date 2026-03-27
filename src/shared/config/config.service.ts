const ENV = {
	NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
	NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
	NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
} as const;

type EnvKeys = keyof typeof ENV;

class ConfigService {
	get(key: EnvKeys): string | undefined {
		return ENV[key];
	}

	getOrThrow(key: EnvKeys): string {
		const value = ENV[key];

		if (!value) {
			throw new Error(`Config error: missing env ${key}`);
		}

		return value;
	}
}

export const configService = new ConfigService();
