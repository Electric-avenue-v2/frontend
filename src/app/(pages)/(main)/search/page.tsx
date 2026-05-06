import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { FC } from 'react';
import { getSearchProducts } from '~/entities/product/index.server';
import { mapSearchParamsToInput, type NextSearchParams } from '~/shared/lib';
import { ProductListingWidget } from '~/widgets/product-listing';

interface Props {
	searchParams: Promise<NextSearchParams & { q?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
	const { q } = await searchParams;

	const query = q?.trim();

	const baseMetadata: Metadata = {
		robots: {
			index: false,
			follow: true
		}
	};

	if (!query) {
		return {
			...baseMetadata,
			title: 'Search',
			description: 'Search products'
		};
	}

	return {
		...baseMetadata,
		title: `Search result by query ${query}`,
		description: `Results for "${query}"`
	};
}

const Page: FC<Props> = async ({ searchParams }) => {
	const resolvedSearchParams = await searchParams;

	const query = resolvedSearchParams.q?.trim();
	if (!query) {
		notFound(); // to review
	}

	const baseInput = mapSearchParamsToInput(resolvedSearchParams);
	const products = await getSearchProducts({
		...baseInput,
		query
	});

	return (
		<ProductListingWidget
			aggregations={products.aggregations}
			pagination={products.pagination}
			items={products.items}
		/>
	);
};

export default Page;
