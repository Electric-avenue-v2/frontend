import type { MetadataRoute } from 'next';
import { getSitemapCategories } from '~/entities/category/index.server';
import { configService } from '~/shared/config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = configService.getOrThrow('NEXT_PUBLIC_DOMAIN_URL');

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1
		}
	];

	const categories = await getSitemapCategories();

	const categoryRoutes: MetadataRoute.Sitemap = categories.map(category => ({
		url: `${baseUrl}/category/${category.slug}`,
		lastModified: new Date(category.lastModified),
		changeFrequency: 'weekly',
		priority: 0.8
	}));

	return [...staticRoutes, ...categoryRoutes];
}
