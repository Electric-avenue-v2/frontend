import { type FC } from 'react';
import { ProductCard } from '~/entities/product';
import { ProductPagination } from '~/features/product-pagination';
import { SortSelect } from '~/features/product-sort';
import type { PaginationMeta, ProductListItem, SearchAggregations } from '~/shared/api/gql/graphql';
import { isAuthenticated } from '~/shared/lib';
import { ProductListingFilters } from '~/widgets/product-listing/ui/product-filters/ProductListingFilters';
import { ProductSheetFilters } from '~/widgets/product-listing/ui/product-filters/ProductSheetFilters';
import styles from './product-listing-widget.module.css';
import { Typography } from '~/shared/ui/typography';

interface ProductListingWidgetProps {
	items: ProductListItem[];
	aggregations: SearchAggregations;
	pagination: PaginationMeta;
}

export const ProductListingWidget: FC<ProductListingWidgetProps> = async ({
	items,
	aggregations,
	pagination
}) => {
	const isAuth = await isAuthenticated();

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.mobileFilters}>
					<ProductSheetFilters aggregations={aggregations} />
				</div>

				<Typography variant='body-sm'>{pagination.totalItems} products found</Typography>

				<SortSelect />
			</div>

			<div className={styles.layout}>
				<div className={styles.sidebar}>
					<ProductListingFilters aggregations={aggregations} className={styles.listingFilters} />
				</div>

				<div className={styles.main}>
					<div className={styles.grid}>
						{items.map((product, index) => (
							<ProductCard
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
				</div>
			</div>
		</>
	);
};
