import type { Metadata } from 'next';
import type { CategoryBySlugResponse } from '~/entities/category';
import type { CategoryProductsResponse } from '~/entities/product';
import { configService } from '~/shared/config';
import { unSlugify } from '~/shared/lib';

export function getCategoryMetadata(category: CategoryBySlugResponse, slug: string): Metadata {
	const categoryName = category?.name || unSlugify(slug);
	const description = `The best products in the ${categoryName} category.`;

	return {
		title: categoryName,
		description,
		alternates: { canonical: `/category/${slug}` },
		openGraph: {
			title: categoryName,
			description,
			images: category?.icon ? [{ url: category.icon }] : []
		}
	};
}

export function getCategoryJsonLd(
	category: NonNullable<CategoryBySlugResponse>,
	products: CategoryProductsResponse,
	slug: string
) {
	const DOMAIN_URL = configService.getOrThrow('NEXT_PUBLIC_DOMAIN_URL');

	return {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: category.name,
		description: `The best products in the ${category.name} category.`,
		url: `${DOMAIN_URL}/category/${slug}`,
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
}
