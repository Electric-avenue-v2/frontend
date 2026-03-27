// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import storybook from 'eslint-plugin-storybook';
import { defineConfig, globalIgnores } from 'eslint/config';
import path from 'node:path';
import tseslint from 'typescript-eslint';

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	{
		files: ['**/*.ts', '**/*.tsx'],
		ignores: ['.storybook/**'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: path.resolve(process.cwd(), 'tsconfig.json'),
				tsconfigRootDir: process.cwd()
			}
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin
		},
		rules: {
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					fixStyle: 'separate-type-imports'
				}
			],
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/await-thenable': 'error',
			'@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
			'@typescript-eslint/return-await': ['error', 'never']
		}
	},
	globalIgnores(['.next/**', 'out/**', 'build/**', 'coverage/**', 'next-env.d.ts']),
	...storybook.configs['flat/recommended']
]);

export default eslintConfig;
