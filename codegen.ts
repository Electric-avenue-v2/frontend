import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
	schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
	documents: ['src/**/*.tsx', 'src/**/*.ts'],
	generates: {
		'./src/shared/api/gql/': {
			preset: 'client',
		},
		'./src/shared/api/gql/schema.graphql': {
			plugins: ['schema-ast'],
		},
	},
};

export default config;