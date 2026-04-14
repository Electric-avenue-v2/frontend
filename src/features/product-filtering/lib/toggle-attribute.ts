import { parseAttributes, stringifyAttributes } from '~/shared/lib/search-params-mapper';

interface AttributeGroup {
	slug: string;
	values: string[];
}

export const toggleAttribute = (
	currentAttrsString: string | undefined,
	attributeSlug: string,
	value: string,
): string => {
	const parsedAttrs: AttributeGroup[] = parseAttributes(currentAttrsString) ?? [];
	const isChecked = parsedAttrs.find(a => a.slug === attributeSlug)?.values.includes(value) ?? false;

	let newAttrs: AttributeGroup[];

	if (isChecked) {
		newAttrs = parsedAttrs
			.map(group =>
				group.slug === attributeSlug
					? { ...group, values: group.values.filter(v => v !== value) }
					: group,
			)
			.filter(group => group.values.length > 0);
	} else {
		const existing = parsedAttrs.find(a => a.slug === attributeSlug);
		if (existing) {
			newAttrs = parsedAttrs.map(group =>
				group.slug === attributeSlug
					? { ...group, values: [...group.values, value] }
					: group,
			);
		} else {
			newAttrs = [...parsedAttrs, { slug: attributeSlug, values: [value] }];
		}
	}

	return stringifyAttributes(newAttrs);
};