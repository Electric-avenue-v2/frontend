import type { Metadata } from 'next';
import type { ProductByIdResponse } from '~/entities/product';
import { configService } from '~/shared/config';

export function getProductPath(p: ProductByIdResponse) {
	return `/product/${p.slug}/${p.id}`;
}

export function getProductMetadata(product: ProductByIdResponse): Metadata {
	const canonicalPath = getProductPath(product);

	return {
		title: product.title,
		description: product.description,
		alternates: {
			canonical: canonicalPath
		},
		openGraph: {
			type: 'website',
			title: product.title,
			description: product.description,
			url: canonicalPath,
			images: product.thumbnailUrl ? [{ url: product.thumbnailUrl, alt: product.title }] : []
		}
	};
}

export function getProductJsonLd(product: ProductByIdResponse) {
	const domainUrl = configService.getOrThrow('NEXT_PUBLIC_DOMAIN_URL');
	const productUrl = `${domainUrl}${getProductPath(product)}`;

	return {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: product.title,
		description: product.description,
		image: product.thumbnailUrl ? [product.thumbnailUrl] : [],
		sku: product.variants[0]?.sku,
		category: product.category.name,
		brand: {
			'@type': 'Brand',
			name: 'Electric Avenue'
		},
		offers: {
			'@type': 'AggregateOffer',
			priceCurrency: 'USD',
			lowPrice: product.minPrice,
			highPrice: product.maxPrice,
			offerCount: product.variants.length,
			availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
			url: productUrl
		}
	};
}
