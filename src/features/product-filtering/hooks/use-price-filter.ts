import type { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { type ChangeEvent, useState } from 'react';
import { parseAndValidate } from './../lib/parse-and-validate';
import { buildSearchParams } from './../lib/price-search-params.builder';

type PriceRange = [number, number];

interface UsePriceFilterProps {
	minBound: number;
	maxBound: number;
}

export const usePriceFilter = ({ minBound, maxBound }: UsePriceFilterProps) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const urlMin = Number(searchParams.get('minPrice') ?? minBound);
	const urlMax = Number(searchParams.get('maxPrice') ?? maxBound);

	const [lastSyncedRange, setLastSyncedRange] = useState<PriceRange>([urlMin, urlMax]);
	const [range, setRange] = useState<PriceRange>([urlMin, urlMax]);
	const [inputValues, setInputValues] = useState<PriceRange>([urlMin, urlMax]);

	if (urlMin !== lastSyncedRange[0] || urlMax !== lastSyncedRange[1]) {
		const next: PriceRange = [urlMin, urlMax];
		setLastSyncedRange(next);
		setRange(next);
		setInputValues(next);
	}

	const handleInputChange = (index: 0 | 1) => (e: ChangeEvent<HTMLInputElement>) => {
		const next: PriceRange = [inputValues[0], inputValues[1]];
		next[index] = Number(e.target.value);
		setInputValues(next);
	};

	const handleBlur = () => {
		const validated = parseAndValidate(inputValues, minBound, maxBound);
		setRange(validated);
		setInputValues(validated);
	};

	const handleSliderChange = (values: number[]) => {
		const [min, max] = values;
		if (min === undefined || max === undefined) return;
		setRange([min, max]);
		setInputValues([min, max]);
	};

	const applyFilter = (values?: PriceRange) => {
		const [finalMin, finalMax] = values ?? parseAndValidate(inputValues, minBound, maxBound);
		const params = buildSearchParams(searchParams, finalMin, finalMax, minBound, maxBound);
		router.push(`${pathname}?${params.toString()}` as Route, { scroll: false });
	};

	const handleSliderCommit = (values: number[]) => {
		const [min, max] = values;
		if (min === undefined || max === undefined) return;
		applyFilter([min, max]);
	};

	return {
		range,
		inputValues,
		minBound,
		maxBound,
		handleInputChange,
		handleBlur,
		handleSliderChange,
		handleSliderCommit,
		applyFilter
	};
};
