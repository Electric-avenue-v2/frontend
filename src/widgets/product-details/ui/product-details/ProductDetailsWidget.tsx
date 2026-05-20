import type { FC } from 'react';
import type { ProductByIdResponse } from '~/entities/product';
import styles from './product-details-widget.module.css';
import { ProductDescription } from './ProductDescription';
import { ProductGallery } from './ProductGallery';
import { ProductSpecs } from './ProductSpecs';
import { ProductSummary } from './ProductSummary';
import { ProductVariants } from './ProductVariants';

interface ProductDetailsWidgetProps {
	product: ProductByIdResponse;
}

export const ProductDetailsWidget: FC<ProductDetailsWidgetProps> = ({ product }) => {
	const specs = product.specs ?? [];

	return (
		<article className={styles.product}>
			<section className={styles.hero}>
				<ProductGallery product={product} />
				<ProductSummary product={product} />
			</section>

			<div className={styles.details}>
				<ProductDescription product={product} />
				<ProductSpecs specs={specs} />
				<ProductVariants variants={product.variants} />
			</div>
		</article>
	);
};
