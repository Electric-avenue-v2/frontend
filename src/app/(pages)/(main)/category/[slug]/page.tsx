import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { FC } from 'react';
import { getCategoryBySlug } from '~/entities/category/index.server';
import { getCategoryProducts } from '~/entities/product/index.server';
import { mapSearchParamsToInput, type NextSearchParams } from '~/shared/lib';
import { ProductListingWidget } from '~/widgets/product-listing';
import { getCategoryJsonLd, getCategoryMetadata } from './_lib/get-category-seo';

interface Props {
	params: Promise<{ slug: string }>;
	searchParams: Promise<NextSearchParams>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const category = await getCategoryBySlug(slug);
	return getCategoryMetadata(category, slug);
}

const Page: FC<Props> = async ({ params, searchParams }) => {
	const { slug } = await params;
	const resolvedSearchParams = await searchParams;

	const baseInput = mapSearchParamsToInput(resolvedSearchParams);

	const [category, products] = await Promise.all([
		getCategoryBySlug(slug),
		getCategoryProducts({ ...baseInput, categorySlug: slug })
	]);

	if (!category) {
		notFound();
	}

	const jsonLd = getCategoryJsonLd(category, products, slug);

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
