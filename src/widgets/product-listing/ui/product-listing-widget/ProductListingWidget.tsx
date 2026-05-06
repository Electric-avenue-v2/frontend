import { type FC } from 'react';
import { ProductCard } from '~/entities/product';
import { ProductPagination } from '~/features/product-pagination';
import { SortSelect } from '~/features/product-sort';
import type { PaginationMeta, ProductListItem, SearchAggregations } from '~/shared/api/gql/graphql';
import { isAuthenticated } from '~/shared/lib';
import { Typography } from '~/shared/ui/typography';
import { ProductEmptyState } from '~/widgets/product-listing/ui/product-empty-state/ProductEmtyState';
import { ProductListingFilters } from '~/widgets/product-listing/ui/product-filters/ProductListingFilters';
import { ProductSheetFilters } from '~/widgets/product-listing/ui/product-filters/ProductSheetFilters';
import styles from './product-listing-widget.module.css';

interface ProductListingWidgetProps {
	items: ProductListItem[];
	aggregations: SearchAggregations;
	pagination: PaginationMeta;
}

type Variant = 'results' | 'empty';

export const ProductListingWidget: FC<ProductListingWidgetProps> = async ({
	items,
	aggregations,
	pagination
}) => {
	const isAuth = await isAuthenticated();

	const variant: Variant = items.length === 0 ? 'empty' : 'results';

	const hasFilters =
		aggregations.attributes.length > 0 ||
		!!aggregations.priceRange?.max ||
		!!aggregations.priceRange?.min;

	const imageSizes = `
		(max-width: 320px) 100vw,
		(max-width: 700px) 50vw,
		(max-width: 1200px) 33vw,
		25vw
	`;

	return (
		<>
			<div className={styles.wrapper}>
				{hasFilters && (
					<div className={styles.mobileFilters}>
						<ProductSheetFilters aggregations={aggregations} />
					</div>
				)}

				{variant === 'results' && (
					<>
						<Typography variant="body-sm">{pagination.totalItems} products found</Typography>

						<SortSelect />
					</>
				)}
			</div>

			<div className={styles.layout} data-variant={variant} data-has-filters={hasFilters}>
				<section className={styles.sidebar}>
					<ProductListingFilters aggregations={aggregations} className={styles.listingFilters} />
				</section>

				<section className={styles.main}>
					{variant === 'empty' ? (
						<ProductEmptyState />
					) : (
						<>
							<div className={styles.grid}>
								{items.map((product, index) => (
									<ProductCard
										imageSizes={imageSizes}
										key={product.id}
										isAuth={isAuth}
										product={product}
										priority={index < 6}
									/>
								))}
							</div>

							<div className={styles.paginationWrapper}>
								<ProductPagination meta={pagination} />
							</div>
						</>
					)}
				</section>
			</div>
		</>
	);
};
