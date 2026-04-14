import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { FC } from 'react';
import { GetCategoryBySlug } from '~/entities/category/api/category.queries';
import { CategoryProductsDocument } from '~/entities/product';
import { serverFetcher } from '~/shared/api/server-fetcher';
import { configService } from '~/shared/config';
import { mapSearchParamsToInput, type NextSearchParams, unSlugify } from '~/shared/lib';
import { ProductListingWidget } from '~/widgets/product-listing';

interface Props {
	params: Promise<{ slug: string }>;
	searchParams: Promise<NextSearchParams>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const resolvedParams = await params;

	const { categoryBySlug: category } = await serverFetcher(GetCategoryBySlug, {
		slug: resolvedParams.slug
	});

	const categoryName = category?.name || unSlugify(resolvedParams.slug);

	return {
		title: categoryName,
		description: `The best products in the ${categoryName} category.`,
		alternates: { canonical: `/category/${resolvedParams.slug}` },
		openGraph: {
			title: categoryName,
			description: `The best products in the ${categoryName} category.`,
			images: category?.icon ? [{ url: category.icon }] : []
		}
	};
}

const Page: FC<Props> = async ({ params, searchParams }) => {
	const resolvedParams = await params;
	const resolvedSearchParams = await searchParams;

	const baseInput = mapSearchParamsToInput(resolvedSearchParams);

	const [{ categoryBySlug: category }, { categoryProducts: products }] = await Promise.all([
		serverFetcher(GetCategoryBySlug, { slug: resolvedParams.slug }),
		serverFetcher(CategoryProductsDocument, {
			input: {
				...baseInput,
				categorySlug: resolvedParams.slug
			}
		})
	]);

	if (!category) {
		notFound();
	}

	console.log(products);

	const DOMAIN_URL = configService.getOrThrow('NEXT_PUBLIC_DOMAIN_URL');
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: category.name,
		description: `The best products in the ${category.name} category.`,
		url: `${DOMAIN_URL}/category/${resolvedParams.slug}`,
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: products.items.map((item, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				name: item.title,
				url: `${DOMAIN_URL}/product/${item.slug}`
			}))
		}
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
				}}
			/>
			<ProductListingWidget
				items={products.items}
				aggregations={products.aggregations}
				pagination={products.pagination}
			/>
		</>
	);
};

export default Page;
