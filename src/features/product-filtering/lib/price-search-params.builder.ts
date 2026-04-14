export const buildSearchParams = (
	base: URLSearchParams,
	finalMin: number,
	finalMax: number,
	minBound: number,
	maxBound: number,
): URLSearchParams => {
	const params = new URLSearchParams(base);

	if (finalMin > minBound) {
		params.set('minPrice', String(finalMin));
	} else {
		params.delete('minPrice');
	}

	if (finalMax < maxBound) {
		params.set('maxPrice', String(finalMax));
	} else {
		params.delete('maxPrice');
	}

	params.delete('page');

	return params;
};