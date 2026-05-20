/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n\tquery GetCategories {\n\t\tcategories {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\ticon\n\t\t\tparentId\n\t\t}\n\t}\n": typeof types.GetCategoriesDocument,
    "\n\tquery GetCategoryBySlug($slug: String!) {\n\t\tcategoryBySlug(slug: $slug) {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\ticon\n\t\t}\n\t}\n": typeof types.GetCategoryBySlugDocument,
    "\n\tquery GetSitemapCategories {\n\t\tsitemapCategories {\n\t\t\tslug\n\t\t\tlastModified\n\t\t}\n\t}\n": typeof types.GetSitemapCategoriesDocument,
    "\n\tquery searchProducts($input: SearchProductsInput!) {\n\t\tsearchProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tslug\n\t\t\t\tminPrice\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tsellerId\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t\taggregations {\n\t\t\t\tattributes {\n\t\t\t\t\tslug\n\t\t\t\t\tname\n\t\t\t\t\tvalues {\n\t\t\t\t\t\tvalue\n\t\t\t\t\t\tcount\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tpriceRange {\n\t\t\t\t\tmin\n\t\t\t\t\tmax\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": typeof types.SearchProductsDocument,
    "\n\tquery categoryProducts($input: CategoryProductsInput!) {\n\t\tcategoryProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tsellerId\n\t\t\t\tslug\n\t\t\t\tminPrice\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t\tisLiked\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t\taggregations {\n\t\t\t\tattributes {\n\t\t\t\t\tslug\n\t\t\t\t\tname\n\t\t\t\t\tvalues {\n\t\t\t\t\t\tvalue\n\t\t\t\t\t\tcount\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tpriceRange {\n\t\t\t\t\tmin\n\t\t\t\t\tmax\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": typeof types.CategoryProductsDocument,
    "\n\tquery Product($id: String!) {\n\t\tproduct(id: $id) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tslug\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\tminPrice\n\t\t\tmaxPrice\n\t\t\ttotalStock\n\t\t\tinStock\n\t\t\tthumbnailUrl\n\t\t\tdescription\n\t\t\tcategory {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\ticon\n\t\t\t}\n\t\t\tseller {\n\t\t\t\tid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tvariants {\n\t\t\t\tid\n\t\t\t\tsku\n\t\t\t\tprice\n\t\t\t\tstock\n\t\t\t\tproductImages {\n\t\t\t\t\tid\n\t\t\t\t\turl\n\t\t\t\t\tpublicId\n\t\t\t\t}\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t\tslug\n\t\t\t\t\tvalue\n\t\t\t\t}\n\t\t\t}\n\t\t\tproductImages {\n\t\t\t\tid\n\t\t\t\turl\n\t\t\t\tpublicId\n\t\t\t}\n\t\t\tspecs {\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n": typeof types.ProductDocument,
    "\n\tquery Me {\n\t\tme {\n\t\t\tid\n\t\t\temail\n\t\t\trole\n\t\t}\n\t}\n": typeof types.MeDocument,
    "\n\tmutation Register($input: RegisterInput!) {\n\t\tregister(input: $input) {\n\t\t\tuserId\n\t\t}\n\t}\n": typeof types.RegisterDocument,
    "\n\tmutation Login($input: LoginInput!) {\n\t\tlogin(input: $input) {\n\t\t\taccessToken\n\t\t\trefreshToken\n\t\t}\n\t}\n": typeof types.LoginDocument,
    "\n\tmutation Logout {\n\t\tlogout {\n\t\t\tmessage\n\t\t}\n\t}\n": typeof types.LogoutDocument,
    "\n\tmutation VerifyOtp($input: VerifyOtpInput!) {\n\t\tverifyOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n": typeof types.VerifyOtpDocument,
    "\n\tmutation ResendOtp($input: ResendOtpInput!) {\n\t\tresendOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n": typeof types.ResendOtpDocument,
    "\n\tmutation AddFavorite($productId: String!) {\n\t\taddFavorite(productId: $productId)\n\t}\n": typeof types.AddFavoriteDocument,
    "\n\tmutation RemoveFavorite($productId: String!) {\n\t\tremoveFavorite(productId: $productId)\n\t}\n": typeof types.RemoveFavoriteDocument,
    "\n  mutation SyncFavorites($input: SyncFavoritesInput!) {\n    syncFavorites(input: $input)\n  }\n": typeof types.SyncFavoritesDocument,
    "\n\tquery FavoriteProducts($input: FavoriteProductsInput!) {\n\t\tfavoriteProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tslug\n\t\t\t\tminPrice\n\t\t\t\tsellerId\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t\tisLiked\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t}\n\t}\n": typeof types.FavoriteProductsDocument,
    "\n\tquery GuestFavoriteProducts($input: GuestFavoriteProductsInput!) {\n\t\tguestFavoriteProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tslug\n\t\t\t\tsellerId\n\t\t\t\tminPrice\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t\tisLiked\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t}\n\t}\n": typeof types.GuestFavoriteProductsDocument,
    "\n\tquery SearchSuggestions($input: SearchSuggestionsInput!) {\n\t\tsearchSuggestions(input: $input) {\n\t\t\tid,\n\t\t\ttitle\n\t\t\tslug\n\t\t\tcategorySlug\n\t\t\tcategoryName\n\t\t}\n\t}\n": typeof types.SearchSuggestionsDocument,
};
const documents: Documents = {
    "\n\tquery GetCategories {\n\t\tcategories {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\ticon\n\t\t\tparentId\n\t\t}\n\t}\n": types.GetCategoriesDocument,
    "\n\tquery GetCategoryBySlug($slug: String!) {\n\t\tcategoryBySlug(slug: $slug) {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\ticon\n\t\t}\n\t}\n": types.GetCategoryBySlugDocument,
    "\n\tquery GetSitemapCategories {\n\t\tsitemapCategories {\n\t\t\tslug\n\t\t\tlastModified\n\t\t}\n\t}\n": types.GetSitemapCategoriesDocument,
    "\n\tquery searchProducts($input: SearchProductsInput!) {\n\t\tsearchProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tslug\n\t\t\t\tminPrice\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tsellerId\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t\taggregations {\n\t\t\t\tattributes {\n\t\t\t\t\tslug\n\t\t\t\t\tname\n\t\t\t\t\tvalues {\n\t\t\t\t\t\tvalue\n\t\t\t\t\t\tcount\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tpriceRange {\n\t\t\t\t\tmin\n\t\t\t\t\tmax\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.SearchProductsDocument,
    "\n\tquery categoryProducts($input: CategoryProductsInput!) {\n\t\tcategoryProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tsellerId\n\t\t\t\tslug\n\t\t\t\tminPrice\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t\tisLiked\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t\taggregations {\n\t\t\t\tattributes {\n\t\t\t\t\tslug\n\t\t\t\t\tname\n\t\t\t\t\tvalues {\n\t\t\t\t\t\tvalue\n\t\t\t\t\t\tcount\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tpriceRange {\n\t\t\t\t\tmin\n\t\t\t\t\tmax\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.CategoryProductsDocument,
    "\n\tquery Product($id: String!) {\n\t\tproduct(id: $id) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tslug\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\tminPrice\n\t\t\tmaxPrice\n\t\t\ttotalStock\n\t\t\tinStock\n\t\t\tthumbnailUrl\n\t\t\tdescription\n\t\t\tcategory {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\ticon\n\t\t\t}\n\t\t\tseller {\n\t\t\t\tid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tvariants {\n\t\t\t\tid\n\t\t\t\tsku\n\t\t\t\tprice\n\t\t\t\tstock\n\t\t\t\tproductImages {\n\t\t\t\t\tid\n\t\t\t\t\turl\n\t\t\t\t\tpublicId\n\t\t\t\t}\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t\tslug\n\t\t\t\t\tvalue\n\t\t\t\t}\n\t\t\t}\n\t\t\tproductImages {\n\t\t\t\tid\n\t\t\t\turl\n\t\t\t\tpublicId\n\t\t\t}\n\t\t\tspecs {\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n": types.ProductDocument,
    "\n\tquery Me {\n\t\tme {\n\t\t\tid\n\t\t\temail\n\t\t\trole\n\t\t}\n\t}\n": types.MeDocument,
    "\n\tmutation Register($input: RegisterInput!) {\n\t\tregister(input: $input) {\n\t\t\tuserId\n\t\t}\n\t}\n": types.RegisterDocument,
    "\n\tmutation Login($input: LoginInput!) {\n\t\tlogin(input: $input) {\n\t\t\taccessToken\n\t\t\trefreshToken\n\t\t}\n\t}\n": types.LoginDocument,
    "\n\tmutation Logout {\n\t\tlogout {\n\t\t\tmessage\n\t\t}\n\t}\n": types.LogoutDocument,
    "\n\tmutation VerifyOtp($input: VerifyOtpInput!) {\n\t\tverifyOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n": types.VerifyOtpDocument,
    "\n\tmutation ResendOtp($input: ResendOtpInput!) {\n\t\tresendOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n": types.ResendOtpDocument,
    "\n\tmutation AddFavorite($productId: String!) {\n\t\taddFavorite(productId: $productId)\n\t}\n": types.AddFavoriteDocument,
    "\n\tmutation RemoveFavorite($productId: String!) {\n\t\tremoveFavorite(productId: $productId)\n\t}\n": types.RemoveFavoriteDocument,
    "\n  mutation SyncFavorites($input: SyncFavoritesInput!) {\n    syncFavorites(input: $input)\n  }\n": types.SyncFavoritesDocument,
    "\n\tquery FavoriteProducts($input: FavoriteProductsInput!) {\n\t\tfavoriteProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tslug\n\t\t\t\tminPrice\n\t\t\t\tsellerId\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t\tisLiked\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t}\n\t}\n": types.FavoriteProductsDocument,
    "\n\tquery GuestFavoriteProducts($input: GuestFavoriteProductsInput!) {\n\t\tguestFavoriteProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tslug\n\t\t\t\tsellerId\n\t\t\t\tminPrice\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t\tisLiked\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t}\n\t}\n": types.GuestFavoriteProductsDocument,
    "\n\tquery SearchSuggestions($input: SearchSuggestionsInput!) {\n\t\tsearchSuggestions(input: $input) {\n\t\t\tid,\n\t\t\ttitle\n\t\t\tslug\n\t\t\tcategorySlug\n\t\t\tcategoryName\n\t\t}\n\t}\n": types.SearchSuggestionsDocument,
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
export function graphql(source: "\n\tquery GetCategories {\n\t\tcategories {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\ticon\n\t\t\tparentId\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetCategories {\n\t\tcategories {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\ticon\n\t\t\tparentId\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetCategoryBySlug($slug: String!) {\n\t\tcategoryBySlug(slug: $slug) {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\ticon\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetCategoryBySlug($slug: String!) {\n\t\tcategoryBySlug(slug: $slug) {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\ticon\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetSitemapCategories {\n\t\tsitemapCategories {\n\t\t\tslug\n\t\t\tlastModified\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetSitemapCategories {\n\t\tsitemapCategories {\n\t\t\tslug\n\t\t\tlastModified\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery searchProducts($input: SearchProductsInput!) {\n\t\tsearchProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tslug\n\t\t\t\tminPrice\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tsellerId\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t\taggregations {\n\t\t\t\tattributes {\n\t\t\t\t\tslug\n\t\t\t\t\tname\n\t\t\t\t\tvalues {\n\t\t\t\t\t\tvalue\n\t\t\t\t\t\tcount\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tpriceRange {\n\t\t\t\t\tmin\n\t\t\t\t\tmax\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery searchProducts($input: SearchProductsInput!) {\n\t\tsearchProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tslug\n\t\t\t\tminPrice\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tsellerId\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t\taggregations {\n\t\t\t\tattributes {\n\t\t\t\t\tslug\n\t\t\t\t\tname\n\t\t\t\t\tvalues {\n\t\t\t\t\t\tvalue\n\t\t\t\t\t\tcount\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tpriceRange {\n\t\t\t\t\tmin\n\t\t\t\t\tmax\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery categoryProducts($input: CategoryProductsInput!) {\n\t\tcategoryProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tsellerId\n\t\t\t\tslug\n\t\t\t\tminPrice\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t\tisLiked\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t\taggregations {\n\t\t\t\tattributes {\n\t\t\t\t\tslug\n\t\t\t\t\tname\n\t\t\t\t\tvalues {\n\t\t\t\t\t\tvalue\n\t\t\t\t\t\tcount\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tpriceRange {\n\t\t\t\t\tmin\n\t\t\t\t\tmax\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery categoryProducts($input: CategoryProductsInput!) {\n\t\tcategoryProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tsellerId\n\t\t\t\tslug\n\t\t\t\tminPrice\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t\tisLiked\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t\taggregations {\n\t\t\t\tattributes {\n\t\t\t\t\tslug\n\t\t\t\t\tname\n\t\t\t\t\tvalues {\n\t\t\t\t\t\tvalue\n\t\t\t\t\t\tcount\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tpriceRange {\n\t\t\t\t\tmin\n\t\t\t\t\tmax\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Product($id: String!) {\n\t\tproduct(id: $id) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tslug\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\tminPrice\n\t\t\tmaxPrice\n\t\t\ttotalStock\n\t\t\tinStock\n\t\t\tthumbnailUrl\n\t\t\tdescription\n\t\t\tcategory {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\ticon\n\t\t\t}\n\t\t\tseller {\n\t\t\t\tid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tvariants {\n\t\t\t\tid\n\t\t\t\tsku\n\t\t\t\tprice\n\t\t\t\tstock\n\t\t\t\tproductImages {\n\t\t\t\t\tid\n\t\t\t\t\turl\n\t\t\t\t\tpublicId\n\t\t\t\t}\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t\tslug\n\t\t\t\t\tvalue\n\t\t\t\t}\n\t\t\t}\n\t\t\tproductImages {\n\t\t\t\tid\n\t\t\t\turl\n\t\t\t\tpublicId\n\t\t\t}\n\t\t\tspecs {\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Product($id: String!) {\n\t\tproduct(id: $id) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tslug\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\tminPrice\n\t\t\tmaxPrice\n\t\t\ttotalStock\n\t\t\tinStock\n\t\t\tthumbnailUrl\n\t\t\tdescription\n\t\t\tcategory {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\ticon\n\t\t\t}\n\t\t\tseller {\n\t\t\t\tid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tvariants {\n\t\t\t\tid\n\t\t\t\tsku\n\t\t\t\tprice\n\t\t\t\tstock\n\t\t\t\tproductImages {\n\t\t\t\t\tid\n\t\t\t\t\turl\n\t\t\t\t\tpublicId\n\t\t\t\t}\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t\tslug\n\t\t\t\t\tvalue\n\t\t\t\t}\n\t\t\t}\n\t\t\tproductImages {\n\t\t\t\tid\n\t\t\t\turl\n\t\t\t\tpublicId\n\t\t\t}\n\t\t\tspecs {\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Me {\n\t\tme {\n\t\t\tid\n\t\t\temail\n\t\t\trole\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Me {\n\t\tme {\n\t\t\tid\n\t\t\temail\n\t\t\trole\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation Register($input: RegisterInput!) {\n\t\tregister(input: $input) {\n\t\t\tuserId\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation Register($input: RegisterInput!) {\n\t\tregister(input: $input) {\n\t\t\tuserId\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation Login($input: LoginInput!) {\n\t\tlogin(input: $input) {\n\t\t\taccessToken\n\t\t\trefreshToken\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation Login($input: LoginInput!) {\n\t\tlogin(input: $input) {\n\t\t\taccessToken\n\t\t\trefreshToken\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation Logout {\n\t\tlogout {\n\t\t\tmessage\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation Logout {\n\t\tlogout {\n\t\t\tmessage\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation VerifyOtp($input: VerifyOtpInput!) {\n\t\tverifyOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation VerifyOtp($input: VerifyOtpInput!) {\n\t\tverifyOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation ResendOtp($input: ResendOtpInput!) {\n\t\tresendOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation ResendOtp($input: ResendOtpInput!) {\n\t\tresendOtp(input: $input) {\n\t\t\tmessage\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation AddFavorite($productId: String!) {\n\t\taddFavorite(productId: $productId)\n\t}\n"): (typeof documents)["\n\tmutation AddFavorite($productId: String!) {\n\t\taddFavorite(productId: $productId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation RemoveFavorite($productId: String!) {\n\t\tremoveFavorite(productId: $productId)\n\t}\n"): (typeof documents)["\n\tmutation RemoveFavorite($productId: String!) {\n\t\tremoveFavorite(productId: $productId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SyncFavorites($input: SyncFavoritesInput!) {\n    syncFavorites(input: $input)\n  }\n"): (typeof documents)["\n  mutation SyncFavorites($input: SyncFavoritesInput!) {\n    syncFavorites(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery FavoriteProducts($input: FavoriteProductsInput!) {\n\t\tfavoriteProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tslug\n\t\t\t\tminPrice\n\t\t\t\tsellerId\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t\tisLiked\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery FavoriteProducts($input: FavoriteProductsInput!) {\n\t\tfavoriteProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tslug\n\t\t\t\tminPrice\n\t\t\t\tsellerId\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t\tisLiked\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GuestFavoriteProducts($input: GuestFavoriteProductsInput!) {\n\t\tguestFavoriteProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tslug\n\t\t\t\tsellerId\n\t\t\t\tminPrice\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t\tisLiked\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GuestFavoriteProducts($input: GuestFavoriteProductsInput!) {\n\t\tguestFavoriteProducts(input: $input) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tslug\n\t\t\t\tsellerId\n\t\t\t\tminPrice\n\t\t\t\tmaxPrice\n\t\t\t\tinStock\n\t\t\t\tthumbnailUrl\n\t\t\t\tcategorySlug\n\t\t\t\tcategoryName\n\t\t\t\tisLiked\n\t\t\t}\n\t\t\tpagination {\n\t\t\t\tcurrentPage\n\t\t\t\ttotalPages\n\t\t\t\ttotalItems\n\t\t\t\titemsPerPage\n\t\t\t\thasNextPage\n\t\t\t\thasPrevPage\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery SearchSuggestions($input: SearchSuggestionsInput!) {\n\t\tsearchSuggestions(input: $input) {\n\t\t\tid,\n\t\t\ttitle\n\t\t\tslug\n\t\t\tcategorySlug\n\t\t\tcategoryName\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery SearchSuggestions($input: SearchSuggestionsInput!) {\n\t\tsearchSuggestions(input: $input) {\n\t\t\tid,\n\t\t\ttitle\n\t\t\tslug\n\t\t\tcategorySlug\n\t\t\tcategoryName\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;