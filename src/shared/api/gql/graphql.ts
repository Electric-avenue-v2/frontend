/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AttributeAggregation = {
  __typename?: 'AttributeAggregation';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  values: Array<AttributeValueAggregation>;
};

export type AttributeFilterInput = {
  slug: Scalars['String']['input'];
  values: Array<Scalars['String']['input']>;
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

export type AttributeValueAggregation = {
  __typename?: 'AttributeValueAggregation';
  count: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
};

export type CategoryProductsInput = {
  attributes?: InputMaybe<Array<AttributeFilterInput>>;
  categorySlug: Scalars['String']['input'];
  inStock?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: Scalars['Int']['input'];
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  page?: Scalars['Int']['input'];
  query?: InputMaybe<Scalars['String']['input']>;
  sort?: ProductSort;
};

export type CategorySitemapInfo = {
  __typename?: 'CategorySitemapInfo';
  lastModified: Scalars['DateTime']['output'];
  slug: Scalars['String']['output'];
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

export type FavoriteProductsInput = {
  limit?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
};

export type FavoriteProductsResult = {
  __typename?: 'FavoriteProductsResult';
  items: Array<ProductListItem>;
  pagination: PaginationMeta;
};

export type GuestFavoriteItemInput = {
  addedAt: Scalars['Float']['input'];
  productId: Scalars['String']['input'];
};

export type GuestFavoriteProductsInput = {
  limit?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
  productIds: Array<GuestFavoriteItemInput>;
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
  addFavorite: Scalars['Boolean']['output'];
  createProduct: ProductDetails;
  deleteProduct: ProductDetails;
  invalidateCategoriesCache: Scalars['Boolean']['output'];
  login: Tokens;
  logout: MessageResponse;
  refresh: Tokens;
  register: UserIdResponse;
  removeFavorite: Scalars['Boolean']['output'];
  resendOtp: MessageResponse;
  syncFavorites: Scalars['Boolean']['output'];
  verifyOtp: MessageResponse;
};


export type MutationAddFavoriteArgs = {
  productId: Scalars['String']['input'];
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


export type MutationRemoveFavoriteArgs = {
  productId: Scalars['String']['input'];
};


export type MutationResendOtpArgs = {
  input: ResendOtpInput;
};


export type MutationSyncFavoritesArgs = {
  input: SyncFavoritesInput;
};


export type MutationVerifyOtpArgs = {
  input: VerifyOtpInput;
};

export type PaginationMeta = {
  __typename?: 'PaginationMeta';
  currentPage: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  itemsPerPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PriceRangeAggregation = {
  __typename?: 'PriceRangeAggregation';
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
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

export type ProductListItem = {
  __typename?: 'ProductListItem';
  categoryName: Scalars['String']['output'];
  categorySlug: Scalars['String']['output'];
  id: Scalars['String']['output'];
  inStock: Scalars['Boolean']['output'];
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  maxPrice: Scalars['Float']['output'];
  minPrice: Scalars['Float']['output'];
  sellerId: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type ProductSeller = {
  __typename?: 'ProductSeller';
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

export enum ProductSort {
  Newest = 'NEWEST',
  Popular = 'POPULAR',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC'
}

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
  categoryBySlug?: Maybe<Category>;
  categoryProducts: SearchResult;
  favoriteProducts: FavoriteProductsResult;
  guestFavoriteProducts: FavoriteProductsResult;
  me?: Maybe<UserModel>;
  product: ProductDetails;
  searchProducts: SearchResult;
  searchSuggestions: Array<SearchSuggestion>;
  sitemapCategories: Array<CategorySitemapInfo>;
};


export type QueryCategoryBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCategoryProductsArgs = {
  input: CategoryProductsInput;
};


export type QueryFavoriteProductsArgs = {
  input: FavoriteProductsInput;
};


export type QueryGuestFavoriteProductsArgs = {
  input: GuestFavoriteProductsInput;
};


export type QueryProductArgs = {
  id: Scalars['String']['input'];
};


export type QuerySearchProductsArgs = {
  input: SearchProductsInput;
};


export type QuerySearchSuggestionsArgs = {
  input: SearchSuggestionsInput;
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

export type SearchAggregations = {
  __typename?: 'SearchAggregations';
  attributes: Array<AttributeAggregation>;
  priceRange?: Maybe<PriceRangeAggregation>;
};

export type SearchProductsInput = {
  attributes?: InputMaybe<Array<AttributeFilterInput>>;
  inStock?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: Scalars['Int']['input'];
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  page?: Scalars['Int']['input'];
  query?: InputMaybe<Scalars['String']['input']>;
  sort?: ProductSort;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  aggregations: SearchAggregations;
  items: Array<ProductListItem>;
  pagination: PaginationMeta;
};

export type SearchSuggestion = {
  __typename?: 'SearchSuggestion';
  categoryName: Scalars['String']['output'];
  categorySlug: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type SearchSuggestionsInput = {
  query: Scalars['String']['input'];
};

export type SyncFavoritesInput = {
  productIds: Array<Scalars['String']['input']>;
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
  role: UserRole;
  updatedAt: Scalars['DateTime']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type VerifyOtpInput = {
  email: Scalars['String']['input'];
  otpCode: Scalars['String']['input'];
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, slug: string, icon?: string | null, parentId?: string | null }> };

export type GetCategoryBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCategoryBySlugQuery = { __typename?: 'Query', categoryBySlug?: { __typename?: 'Category', id: string, name: string, slug: string, icon?: string | null } | null };

export type GetSitemapCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSitemapCategoriesQuery = { __typename?: 'Query', sitemapCategories: Array<{ __typename?: 'CategorySitemapInfo', slug: string, lastModified: any }> };

export type SearchProductsQueryVariables = Exact<{
  input: SearchProductsInput;
}>;


export type SearchProductsQuery = { __typename?: 'Query', searchProducts: { __typename?: 'SearchResult', items: Array<{ __typename?: 'ProductListItem', id: string, title: string, slug: string, minPrice: number, maxPrice: number, inStock: boolean, thumbnailUrl?: string | null, sellerId: string, categorySlug: string, categoryName: string }>, pagination: { __typename?: 'PaginationMeta', currentPage: number, totalPages: number, totalItems: number, itemsPerPage: number, hasNextPage: boolean, hasPrevPage: boolean }, aggregations: { __typename?: 'SearchAggregations', attributes: Array<{ __typename?: 'AttributeAggregation', slug: string, name: string, values: Array<{ __typename?: 'AttributeValueAggregation', value: string, count: number }> }>, priceRange?: { __typename?: 'PriceRangeAggregation', min: number, max: number } | null } } };

export type CategoryProductsQueryVariables = Exact<{
  input: CategoryProductsInput;
}>;


export type CategoryProductsQuery = { __typename?: 'Query', categoryProducts: { __typename?: 'SearchResult', items: Array<{ __typename?: 'ProductListItem', id: string, title: string, sellerId: string, slug: string, minPrice: number, maxPrice: number, inStock: boolean, thumbnailUrl?: string | null, categorySlug: string, categoryName: string, isLiked?: boolean | null }>, pagination: { __typename?: 'PaginationMeta', currentPage: number, totalPages: number, totalItems: number, itemsPerPage: number, hasNextPage: boolean, hasPrevPage: boolean }, aggregations: { __typename?: 'SearchAggregations', attributes: Array<{ __typename?: 'AttributeAggregation', slug: string, name: string, values: Array<{ __typename?: 'AttributeValueAggregation', value: string, count: number }> }>, priceRange?: { __typename?: 'PriceRangeAggregation', min: number, max: number } | null } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UserModel', id: string, email: string, role: UserRole } | null };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserIdResponse', userId: string } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Tokens', accessToken: string, refreshToken: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'MessageResponse', message: string } };

export type VerifyOtpMutationVariables = Exact<{
  input: VerifyOtpInput;
}>;


export type VerifyOtpMutation = { __typename?: 'Mutation', verifyOtp: { __typename?: 'MessageResponse', message: string } };

export type ResendOtpMutationVariables = Exact<{
  input: ResendOtpInput;
}>;


export type ResendOtpMutation = { __typename?: 'Mutation', resendOtp: { __typename?: 'MessageResponse', message: string } };

export type AddFavoriteMutationVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type AddFavoriteMutation = { __typename?: 'Mutation', addFavorite: boolean };

export type RemoveFavoriteMutationVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type RemoveFavoriteMutation = { __typename?: 'Mutation', removeFavorite: boolean };

export type SyncFavoritesMutationVariables = Exact<{
  input: SyncFavoritesInput;
}>;


export type SyncFavoritesMutation = { __typename?: 'Mutation', syncFavorites: boolean };

export type FavoriteProductsQueryVariables = Exact<{
  input: FavoriteProductsInput;
}>;


export type FavoriteProductsQuery = { __typename?: 'Query', favoriteProducts: { __typename?: 'FavoriteProductsResult', items: Array<{ __typename?: 'ProductListItem', id: string, title: string, slug: string, minPrice: number, sellerId: string, maxPrice: number, inStock: boolean, thumbnailUrl?: string | null, categorySlug: string, categoryName: string, isLiked?: boolean | null }>, pagination: { __typename?: 'PaginationMeta', currentPage: number, totalPages: number, totalItems: number, itemsPerPage: number, hasNextPage: boolean, hasPrevPage: boolean } } };

export type GuestFavoriteProductsQueryVariables = Exact<{
  input: GuestFavoriteProductsInput;
}>;


export type GuestFavoriteProductsQuery = { __typename?: 'Query', guestFavoriteProducts: { __typename?: 'FavoriteProductsResult', items: Array<{ __typename?: 'ProductListItem', id: string, title: string, slug: string, sellerId: string, minPrice: number, maxPrice: number, inStock: boolean, thumbnailUrl?: string | null, categorySlug: string, categoryName: string, isLiked?: boolean | null }>, pagination: { __typename?: 'PaginationMeta', currentPage: number, totalPages: number, totalItems: number, itemsPerPage: number, hasNextPage: boolean, hasPrevPage: boolean } } };

export type SearchSuggestionsQueryVariables = Exact<{
  input: SearchSuggestionsInput;
}>;


export type SearchSuggestionsQuery = { __typename?: 'Query', searchSuggestions: Array<{ __typename?: 'SearchSuggestion', id: string, title: string, slug: string, categorySlug: string, categoryName: string }> };


export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetCategoryBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategoryBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}}]} as unknown as DocumentNode<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>;
export const GetSitemapCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSitemapCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sitemapCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"lastModified"}}]}}]}}]} as unknown as DocumentNode<GetSitemapCategoriesQuery, GetSitemapCategoriesQueryVariables>;
export const SearchProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchProductsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"minPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxPrice"}},{"kind":"Field","name":{"kind":"Name","value":"inStock"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"sellerId"}},{"kind":"Field","name":{"kind":"Name","value":"categorySlug"}},{"kind":"Field","name":{"kind":"Name","value":"categoryName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"aggregations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceRange"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchProductsQuery, SearchProductsQueryVariables>;
export const CategoryProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"categoryProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryProductsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sellerId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"minPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxPrice"}},{"kind":"Field","name":{"kind":"Name","value":"inStock"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"categorySlug"}},{"kind":"Field","name":{"kind":"Name","value":"categoryName"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"aggregations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceRange"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CategoryProductsQuery, CategoryProductsQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const VerifyOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyOtpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<VerifyOtpMutation, VerifyOtpMutationVariables>;
export const ResendOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResendOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResendOtpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resendOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ResendOtpMutation, ResendOtpMutationVariables>;
export const AddFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addFavorite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}]}]}}]} as unknown as DocumentNode<AddFavoriteMutation, AddFavoriteMutationVariables>;
export const RemoveFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFavorite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}]}]}}]} as unknown as DocumentNode<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>;
export const SyncFavoritesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SyncFavorites"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SyncFavoritesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"syncFavorites"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<SyncFavoritesMutation, SyncFavoritesMutationVariables>;
export const FavoriteProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FavoriteProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FavoriteProductsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favoriteProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"minPrice"}},{"kind":"Field","name":{"kind":"Name","value":"sellerId"}},{"kind":"Field","name":{"kind":"Name","value":"maxPrice"}},{"kind":"Field","name":{"kind":"Name","value":"inStock"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"categorySlug"}},{"kind":"Field","name":{"kind":"Name","value":"categoryName"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}}]}}]}}]}}]} as unknown as DocumentNode<FavoriteProductsQuery, FavoriteProductsQueryVariables>;
export const GuestFavoriteProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GuestFavoriteProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GuestFavoriteProductsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guestFavoriteProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sellerId"}},{"kind":"Field","name":{"kind":"Name","value":"minPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxPrice"}},{"kind":"Field","name":{"kind":"Name","value":"inStock"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"categorySlug"}},{"kind":"Field","name":{"kind":"Name","value":"categoryName"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}}]}}]}}]}}]} as unknown as DocumentNode<GuestFavoriteProductsQuery, GuestFavoriteProductsQueryVariables>;
export const SearchSuggestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchSuggestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchSuggestionsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchSuggestions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"categorySlug"}},{"kind":"Field","name":{"kind":"Name","value":"categoryName"}}]}}]}}]} as unknown as DocumentNode<SearchSuggestionsQuery, SearchSuggestionsQueryVariables>;