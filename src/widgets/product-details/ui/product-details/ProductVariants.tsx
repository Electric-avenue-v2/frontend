import type { FC } from 'react';
import { type ProductByIdResponse, productCurrencyFormatter } from '~/entities/product';
import { Typography } from '~/shared/ui/typography';
import styles from './product-details-widget.module.css';

interface ProductVariantsProps {
	variants: ProductByIdResponse['variants'];
}

export const ProductVariants: FC<ProductVariantsProps> = ({ variants }) => {
	if (variants.length === 0) {
		return null;
	}

	return (
		<section className={styles.section} aria-labelledby="product-variants">
			<div className={styles.sectionHeader}>
				<Typography id="product-variants" variant="h2" className={styles.sectionTitle}>
					Variants
				</Typography>
			</div>
			<ul className={styles.variants}>
				{variants.map(variant => (
					<li key={variant.id} className={styles.variantCard}>
						<div className={styles.variantHead}>
							<Typography as="h3" className={styles.variantSku}>
								{variant.sku}
							</Typography>
							<span className={styles.variantPrice}>
								{productCurrencyFormatter.format(variant.price)}
							</span>
						</div>
						<span className={styles.variantStock} data-stock={variant.stock > 0}>
							{variant.stock > 0 ? `${variant.stock} available` : 'Out of stock'}
						</span>

						{variant.attributes && variant.attributes.length > 0 && (
							<ul className={styles.variantAttrs}>
								{variant.attributes.map(attribute => (
									<li key={`${variant.id}-${attribute.slug}`}>
										<span>{attribute.name}</span>
										<strong>{attribute.value}</strong>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</section>
	);
};
