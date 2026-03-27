/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
	DateTime: { input: any; output: any };
};

export type AttributeInfo = {
	__typename?: 'AttributeInfo';
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	slug: Scalars['String']['output'];
};

export type AttributeValue = {
	__typename?: 'AttributeValue';
	attribute: AttributeInfo;
	id: Scalars['ID']['output'];
	value: Scalars['String']['output'];
};

export type Category = {
	__typename?: 'Category';
	icon?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	isGroup?: Maybe<Scalars['Boolean']['output']>;
	name: Scalars['String']['output'];
	parentId?: Maybe<Scalars['String']['output']>;
};

export type CreateProductInput = {
	categoryId: Scalars['String']['input'];
	description: Scalars['String']['input'];
	images?: InputMaybe<Array<ProductImageInput>>;
	specs: Array<ProductAttributeInput>;
	title: Scalars['String']['input'];
	variants: Array<CreateVariantInput>;
};

export type CreateVariantInput = {
	attributes: Array<ProductAttributeInput>;
	images: Array<ProductImageInput>;
	price: Scalars['Float']['input'];
	sku: Scalars['String']['input'];
	stock: Scalars['Int']['input'];
};

export type GetProductsInput = {
	attributes?: InputMaybe<Array<ProductAttributeFilter>>;
	categoryId?: InputMaybe<Scalars['String']['input']>;
	limit?: Scalars['Int']['input'];
	maxPrice?: InputMaybe<Scalars['Float']['input']>;
	minPrice?: InputMaybe<Scalars['Float']['input']>;
	offset?: Scalars['Int']['input'];
	search?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
	email: Scalars['String']['input'];
	password: Scalars['String']['input'];
};

export type MessageResponse = {
	__typename?: 'MessageResponse';
	message: Scalars['String']['output'];
};

export type Mutation = {
	__typename?: 'Mutation';
	createProduct: ProductDetails;
	deleteProduct: ProductDetails;
	login: Tokens;
	logout: MessageResponse;
	refresh: Tokens;
	register: UserIdResponse;
	resendOtp: MessageResponse;
	verifyOtp: MessageResponse;
};

export type MutationCreateProductArgs = {
	createProductInput: CreateProductInput;
};

export type MutationDeleteProductArgs = {
	id: Scalars['String']['input'];
};

export type MutationLoginArgs = {
	input: LoginInput;
};

export type MutationRegisterArgs = {
	input: RegisterInput;
};

export type MutationResendOtpArgs = {
	input: ResendOtpInput;
};

export type MutationVerifyOtpArgs = {
	input: VerifyOtpInput;
};

export type ProductAttributeFilter = {
	slug: Scalars['String']['input'];
	values: Array<Scalars['String']['input']>;
};

export type ProductAttributeInput = {
	attributeValueId: Scalars['String']['input'];
};

export type ProductAttributeValue = {
	__typename?: 'ProductAttributeValue';
	value: AttributeValue;
};

export type ProductBase = {
	category: ProductCategory;
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ID']['output'];
	/** Min price of variants */
	minPrice?: Maybe<Scalars['Float']['output']>;
	slug: Scalars['String']['output'];
	/** Main picture */
	thumbnail?: Maybe<Scalars['String']['output']>;
	title: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
	variantsCount: Scalars['Int']['output'];
};

export type ProductCategory = {
	__typename?: 'ProductCategory';
	icon?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	slug: Scalars['String']['output'];
};

export type ProductDetails = ProductBase & {
	__typename?: 'ProductDetails';
	category: ProductCategory;
	createdAt: Scalars['DateTime']['output'];
	description: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	/** Min price of variants */
	minPrice?: Maybe<Scalars['Float']['output']>;
	productImages: Array<ProductImage>;
	seller: ProductSeller;
	slug: Scalars['String']['output'];
	specs: Array<ProductAttributeValue>;
	/** Main picture */
	thumbnail?: Maybe<Scalars['String']['output']>;
	title: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
	variants: Array<ProductVariant>;
	variantsCount: Scalars['Int']['output'];
};

export type ProductImage = {
	__typename?: 'ProductImage';
	id: Scalars['ID']['output'];
	publicId: Scalars['String']['output'];
	url: Scalars['String']['output'];
};

export type ProductImageInput = {
	publicId: Scalars['String']['input'];
	url: Scalars['String']['input'];
};

export type ProductListItem = ProductBase & {
	__typename?: 'ProductListItem';
	category: ProductCategory;
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ID']['output'];
	/** Min price of variants */
	minPrice?: Maybe<Scalars['Float']['output']>;
	slug: Scalars['String']['output'];
	/** Main picture */
	thumbnail?: Maybe<Scalars['String']['output']>;
	title: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
	/** Quantity of goods */
	variantsCount: Scalars['Int']['output'];
};

export type ProductPagination = {
	__typename?: 'ProductPagination';
	items: Array<ProductListItem>;
	total: Scalars['Int']['output'];
};

export type ProductSeller = {
	__typename?: 'ProductSeller';
	firstName: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	lastName: Scalars['String']['output'];
};

export type ProductVariant = {
	__typename?: 'ProductVariant';
	attributes?: Maybe<Array<ProductAttributeValue>>;
	id: Scalars['ID']['output'];
	price: Scalars['Float']['output'];
	productImages?: Maybe<Array<ProductImage>>;
	sku: Scalars['String']['output'];
	stock: Scalars['Int']['output'];
};

export type Query = {
	__typename?: 'Query';
	categories: Array<Category>;
	hello: Scalars['String']['output'];
	me?: Maybe<UserModel>;
	product: ProductDetails;
	products: ProductPagination;
};

export type QueryProductArgs = {
	id: Scalars['String']['input'];
};

export type QueryProductsArgs = {
	query: GetProductsInput;
};

export type RegisterInput = {
	email: Scalars['String']['input'];
	firstName: Scalars['String']['input'];
	lastName: Scalars['String']['input'];
	password: Scalars['String']['input'];
};

export type ResendOtpInput = {
	email: Scalars['String']['input'];
};

export type Tokens = {
	__typename?: 'Tokens';
	accessToken: Scalars['String']['output'];
	refreshToken: Scalars['String']['output'];
};

export type UserIdResponse = {
	__typename?: 'UserIdResponse';
	userId: Scalars['String']['output'];
};

export type UserModel = {
	__typename?: 'UserModel';
	confirmed: Scalars['Boolean']['output'];
	createdAt: Scalars['DateTime']['output'];
	email: Scalars['String']['output'];
	firstName: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	lastName: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
};

export type VerifyOtpInput = {
	email: Scalars['String']['input'];
	otpCode: Scalars['String']['input'];
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
	__typename?: 'Query';
	me?: { __typename?: 'UserModel'; email: string } | null;
};

export type RegisterMutationVariables = Exact<{
	input: RegisterInput;
}>;

export type RegisterMutation = {
	__typename?: 'Mutation';
	register: { __typename?: 'UserIdResponse'; userId: string };
};

export type LoginMutationVariables = Exact<{
	input: LoginInput;
}>;

export type LoginMutation = {
	__typename?: 'Mutation';
	login: { __typename?: 'Tokens'; accessToken: string; refreshToken: string };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = {
	__typename?: 'Mutation';
	logout: { __typename?: 'MessageResponse'; message: string };
};

export type VerifyOtpMutationVariables = Exact<{
	input: VerifyOtpInput;
}>;

export type VerifyOtpMutation = {
	__typename?: 'Mutation';
	verifyOtp: { __typename?: 'MessageResponse'; message: string };
};

export type ResendOtpMutationVariables = Exact<{
	input: ResendOtpInput;
}>;

export type ResendOtpMutation = {
	__typename?: 'Mutation';
	resendOtp: { __typename?: 'MessageResponse'; message: string };
};

export const MeDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'Me' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'me' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const RegisterDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'Register' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'RegisterInput' } }
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'register' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'input' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'userId' } }]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'Login' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'LoginInput' } }
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'login' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'input' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } }
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'Logout' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'logout' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const VerifyOtpDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'VerifyOtp' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'VerifyOtpInput' } }
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'verifyOtp' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'input' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<VerifyOtpMutation, VerifyOtpMutationVariables>;
export const ResendOtpDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'ResendOtp' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'ResendOtpInput' } }
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'resendOtp' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'input' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<ResendOtpMutation, ResendOtpMutationVariables>;
