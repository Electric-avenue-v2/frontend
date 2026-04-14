import type { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { parseAttributes } from '~/shared/lib/search-params-mapper';
import { toggleAttribute } from './../lib/toggle-attribute';

interface UseAttributeCheckboxProps {
	attributeSlug: string;
	value: string;
}

export const useAttributeCheckbox = ({ attributeSlug, value }: UseAttributeCheckboxProps) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const currentAttrsString = searchParams.get('attrs') ?? undefined;
	const parsedAttrs = parseAttributes(currentAttrsString) ?? [];
	const isChecked =
		parsedAttrs.find(a => a.slug === attributeSlug)?.values.includes(value) ?? false;

	const handleToggle = () => {
		const params = new URLSearchParams(searchParams.toString());
		const newAttrsString = toggleAttribute(currentAttrsString, attributeSlug, value);

		if (newAttrsString.length === 0) {
			params.delete('attrs');
		} else {
			params.set('attrs', newAttrsString);
		}

		params.delete('page');
		router.push(`${pathname}?${params.toString()}` as Route, { scroll: false });
	};

	return { isChecked, handleToggle };
};
