import type { FC } from 'react';
import type { ProductByIdResponse } from '~/entities/product';
import { Typography } from '~/shared/ui/typography';
import styles from './product-details-widget.module.css';

interface ProductSpecsProps {
	specs: NonNullable<ProductByIdResponse['specs']>;
}

export const ProductSpecs: FC<ProductSpecsProps> = ({ specs }) => {
	if (specs.length === 0) {
		return null;
	}

	return (
		<section className={styles.section} aria-labelledby="product-specifications">
			<div className={styles.sectionHeader}>
				<Typography id="product-specifications" variant="h2" className={styles.sectionTitle}>
					Specifications
				</Typography>
			</div>
			<dl className={styles.specs}>
				{specs.map(spec => (
					<div key={spec.slug} className={styles.specRow}>
						<dt>{spec.name}</dt>
						<dd>{spec.value}</dd>
					</div>
				))}
			</dl>
		</section>
	);
};
