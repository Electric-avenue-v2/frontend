import type { Metadata } from 'next';
import { type FC } from 'react';
import { mapPaginationParams, type NextSearchParams } from '~/shared/lib';
import { Typography } from '~/shared/ui/typography';
import { FavoriteProductsListWidget } from '~/widgets/favorite-products-list';
import styles from './favorites.module.css';

export const metadata: Metadata = {
	title: 'Favorites products',
	description: 'List of favorite products'
};

interface Props {
	searchParams: Promise<NextSearchParams>;
}

const FavoritePage: FC<Props> = async ({ searchParams }) => {
	const resolvedSearchParams = await searchParams;
	const { page, limit } = mapPaginationParams(resolvedSearchParams);

	return (
		<section className={styles.container}>
			<Typography variant="h3" as="h1" className={styles.title}>
				Favorites products
			</Typography>

			<FavoriteProductsListWidget page={page} limit={limit} />
		</section>
	);
};

export default FavoritePage;
