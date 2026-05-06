'use client';

import type { FC } from 'react';
import { ProductCard } from '~/entities/product';
import { useAuth } from '~/features/auth';
import { useFavoritesList } from '~/features/favorite/hooks/use-favorites-list';
import { ProductPagination } from '~/features/product-pagination';
import { Loader } from '~/shared/ui/loader';
import { Typography } from '~/shared/ui/typography';
import styles from './favorite-products-list.module.css';

interface Props {
	page: number;
	limit: number;
}

export const FavoriteProductsListWidget: FC<Props> = ({ page, limit }) => {
	const { isAuth } = useAuth();
	const { data, isLoading, isError } = useFavoritesList({ isAuth, page, limit });

	if (isLoading) {
		return (
			<div className={styles.centeredContent}>
				<Loader />
			</div>
		);
	}

	if (isError || !data) {
		return (
			<div className={styles.centeredContent}>
				<Typography color="destructive">An error occurred while loading</Typography>
			</div>
		);
	}

	if (data.items.length === 0) {
		// RENDER 0 RESULTS COMPONENT
	}

	const imageSizes = `
		(max-width: 320px) 100vw,
		(max-width: 700px) 50vw,
		(max-width: 1100px) 33vw,
		(max-width: 1400px) 25vw,
		20vw
	`;

	return (
		<div>
			<div className={styles.grid}>
				{data.items.map(product => (
					<ProductCard key={product.id} product={product} isAuth={isAuth} imageSizes={imageSizes} />
				))}
			</div>

			<div className={styles.paginationWrapper}>
				<ProductPagination meta={data.pagination} />
			</div>
		</div>
	);
};
