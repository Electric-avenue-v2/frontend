import type { AttributeFilterInput, ProductSort } from '~/shared/api/gql/graphql';

export type NextSearchParams = { [key: string]: string | string[] | undefined };

function getSingleParam(param: string | string[] | undefined): string | undefined {
	return Array.isArray(param) ? param[0] : param;
}

export function parseAttributes(attrsString?: string): AttributeFilterInput[] | undefined {
	if (!attrsString) return undefined;

	const result = new Map<string, string[]>();
	const pairs = attrsString.split(',');

	for (const pair of pairs) {
		const [slug, value] = pair.split(':');
		const existing = result.get(slug) ?? [];
		existing.push(value);
		result.set(slug, existing);
	}

	if (result.size === 0) return undefined;

	return Array.from(result.entries()).map(([slug, values]) => ({
		slug,
		values
	}));
}

export function stringifyAttributes(attributes: { slug: string; values: string[] }[]): string {
	const parts: string[] = [];

	for (const attr of attributes) {
		for (const value of attr.values) {
			parts.push(`${attr.slug}:${value}`);
		}
	}

	return parts.join(',');
}

export function mapSearchParamsToInput(searchParams: NextSearchParams) {
	const pageParam = getSingleParam(searchParams.page);
	const sortParam = getSingleParam(searchParams.sort);
	const minPriceParam = getSingleParam(searchParams.minPrice);
	const maxPriceParam = getSingleParam(searchParams.maxPrice);
	const attrsParam = getSingleParam(searchParams.attrs);

	return {
		page: pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1,
		limit: 24,
		sort: (sortParam as ProductSort) || 'NEWEST',
		minPrice: minPriceParam ? parseFloat(minPriceParam) : undefined,
		maxPrice: maxPriceParam ? parseFloat(maxPriceParam) : undefined,
		attributes: parseAttributes(attrsParam)
	};
}
