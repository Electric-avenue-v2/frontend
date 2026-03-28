import type { MetadataRoute } from 'next';
import { configService } from '~/shared/config';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = configService.getOrThrow('NEXT_PUBLIC_DOMAIN_URL');

	return [
		{
			url: baseUrl,
			lastModified: new Date()
		}
	];
}
