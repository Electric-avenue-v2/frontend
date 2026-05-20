export const productCurrencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	maximumFractionDigits: 2
});

export const productNoCurrencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'decimal',
	maximumFractionDigits: 2
});

export function formatPriceRange(
	minPrice: number,
	maxPrice: number,
	format: 'default' | 'short' = 'default'
) {
	if (minPrice === maxPrice) {
		return productCurrencyFormatter.format(minPrice);
	}

	return `${productCurrencyFormatter.format(minPrice)}-${
		format === 'default'
			? productCurrencyFormatter.format(maxPrice)
			: productNoCurrencyFormatter.format(maxPrice)
	}`;
}
