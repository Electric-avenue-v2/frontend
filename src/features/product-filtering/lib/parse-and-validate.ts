type PriceRange = [number, number];

const clamp = (value: number, min: number, max: number) =>
	Math.min(Math.max(value, min), max);

export const parseAndValidate = (
	raw: PriceRange,
	minBound: number,
	maxBound: number,
): PriceRange => {
	const rawMin = Number(raw[0]);
	const rawMax = Number(raw[1]);

	const min = clamp(Number.isFinite(rawMin) ? rawMin : minBound, minBound, maxBound);
	const max = clamp(Number.isFinite(rawMax) ? rawMax : maxBound, minBound, maxBound);

	return min <= max ? [min, max] : [max, min];
};