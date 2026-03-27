/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as types from './graphql';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
	'\n\tquery Me {\n\t\tme {\n\t\t\temail\n\t\t}\n\t}\n': typeof types.MeDocument;
	'\n\tmutation Register($input: RegisterInput!) {\n\t\tregister(input: $input) {\n\t\t\tuserId\n\t\t}\n\t}\n': typeof types.RegisterDocument;
	'\n\tmutation Login($input: LoginInput!) {\n\t\tlogin(input: $input) {\n\t\t\taccessToken\n\t\t\trefreshToken\n\t\t}\n\t}\n': typeof types.LoginDocument;
	'\n\tmutation Logout {\n\t\tlogout {\n\t\t\tmessage\n\t\t}\n\t}\n': typeof types.LogoutDocument;
	'\n\tmutation VerifyOtp($input: VerifyOtpInput!) {\n\t\tverifyOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n': typeof types.VerifyOtpDocument;
	'\n\tmutation ResendOtp($input: ResendOtpInput!) {\n\t\tresendOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n': typeof types.ResendOtpDocument;
};
const documents: Documents = {
	'\n\tquery Me {\n\t\tme {\n\t\t\temail\n\t\t}\n\t}\n': types.MeDocument,
	'\n\tmutation Register($input: RegisterInput!) {\n\t\tregister(input: $input) {\n\t\t\tuserId\n\t\t}\n\t}\n':
		types.RegisterDocument,
	'\n\tmutation Login($input: LoginInput!) {\n\t\tlogin(input: $input) {\n\t\t\taccessToken\n\t\t\trefreshToken\n\t\t}\n\t}\n':
		types.LoginDocument,
	'\n\tmutation Logout {\n\t\tlogout {\n\t\t\tmessage\n\t\t}\n\t}\n': types.LogoutDocument,
	'\n\tmutation VerifyOtp($input: VerifyOtpInput!) {\n\t\tverifyOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n':
		types.VerifyOtpDocument,
	'\n\tmutation ResendOtp($input: ResendOtpInput!) {\n\t\tresendOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n':
		types.ResendOtpDocument
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery Me {\n\t\tme {\n\t\t\temail\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery Me {\n\t\tme {\n\t\t\temail\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation Register($input: RegisterInput!) {\n\t\tregister(input: $input) {\n\t\t\tuserId\n\t\t}\n\t}\n'
): (typeof documents)['\n\tmutation Register($input: RegisterInput!) {\n\t\tregister(input: $input) {\n\t\t\tuserId\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation Login($input: LoginInput!) {\n\t\tlogin(input: $input) {\n\t\t\taccessToken\n\t\t\trefreshToken\n\t\t}\n\t}\n'
): (typeof documents)['\n\tmutation Login($input: LoginInput!) {\n\t\tlogin(input: $input) {\n\t\t\taccessToken\n\t\t\trefreshToken\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation Logout {\n\t\tlogout {\n\t\t\tmessage\n\t\t}\n\t}\n'
): (typeof documents)['\n\tmutation Logout {\n\t\tlogout {\n\t\t\tmessage\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation VerifyOtp($input: VerifyOtpInput!) {\n\t\tverifyOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n'
): (typeof documents)['\n\tmutation VerifyOtp($input: VerifyOtpInput!) {\n\t\tverifyOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation ResendOtp($input: ResendOtpInput!) {\n\t\tresendOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n'
): (typeof documents)['\n\tmutation ResendOtp($input: ResendOtpInput!) {\n\t\tresendOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n'];

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
