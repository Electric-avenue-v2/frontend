import type { FC } from 'react';
import type { ProductByIdResponse } from '~/entities/product';
import { Typography } from '~/shared/ui/typography';
import styles from './product-details-widget.module.css';

interface ProductDescriptionProps {
	product: ProductByIdResponse;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({ product }) => {
	return (
		<section className={styles.section} aria-labelledby="product-description">
			<div className={styles.sectionHeader}>
				<Typography id="product-description" variant="h2" className={styles.sectionTitle}>
					Description
				</Typography>
			</div>
			<Typography className={styles.description}>{product.description}</Typography>
		</section>
	);
};
