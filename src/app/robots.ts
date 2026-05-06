import type { MetadataRoute } from 'next';
import { configService } from '~/shared/config';

export default function robots(): MetadataRoute.Robots {
	const baseUrl = configService.getOrThrow('NEXT_PUBLIC_DOMAIN_URL');

	return {
		rules: [
			{
				userAgent: '*',
				disallow: ['/auth', '/workspace', '/search', '/favorites']
			}
		],
		sitemap: `${baseUrl}/sitemap.xml`
	};
}
