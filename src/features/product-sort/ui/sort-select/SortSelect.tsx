'use client';

import type { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ProductSort } from '~/shared/api/gql/graphql';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/shared/ui/select';
import { SORT_OPTIONS } from '../../config/constants';
import { isProductSort } from '../../lib/sort.utils';
import styles from './sort-select.module.css';

export const SortSelect = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const currentSortParam = searchParams.get('sort');
	const currentSort = isProductSort(currentSortParam) ? currentSortParam : ProductSort.Newest;

	const handleValueChange = (newSort: string) => {
		const params = new URLSearchParams(searchParams.toString());

		if (newSort === ProductSort.Newest) {
			params.delete('sort');
		} else {
			params.set('sort', newSort);
		}

		params.delete('page');

		router.push(`${pathname}?${params.toString()}` as Route, { scroll: false });
	};

	return (
		<Select value={currentSort} onValueChange={handleValueChange}>
			<SelectTrigger size="sm" aria-label='Sort selection' className={styles.trigger}>
				<SelectValue aria-label={currentSort}>{SORT_OPTIONS[currentSort]}</SelectValue>
			</SelectTrigger>
			<SelectContent position="popper">
				{Object.entries(SORT_OPTIONS).map(([value, label]) => (
					<SelectItem key={value} value={value}>
						{label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};
