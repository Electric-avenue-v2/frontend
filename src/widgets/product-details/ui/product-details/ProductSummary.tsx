import { BadgeCheck, PackageCheck, ShieldCheck, Store, Tag } from 'lucide-react';
import type { FC } from 'react';
import { formatPriceRange, type ProductByIdResponse } from '~/entities/product';
import { Typography } from '~/shared/ui/typography';
import styles from './product-details-widget.module.css';

interface ProductSummaryProps {
	product: ProductByIdResponse;
}

export const ProductSummary: FC<ProductSummaryProps> = ({ product }) => {
	const formattedPrice = formatPriceRange(product.minPrice, product.maxPrice);
	const sellerName = `${product.seller.firstName} ${product.seller.lastName}`.trim();

	return (
		<header className={styles.summary}>
			<div className={styles.kicker}>
				<Tag size={16} aria-hidden />
				<span>{product.category.name}</span>
			</div>

			<Typography variant="h1" className={styles.title}>
				{product.title}
			</Typography>

			<div className={styles.priceRow}>
				<Typography as="p" className={styles.price}>
					{formattedPrice}
				</Typography>
				<span className={styles.stockBadge} data-stock={product.inStock}>
					<PackageCheck size={16} aria-hidden />
					{product.inStock ? `${product.totalStock} in stock` : 'Out of stock'}
				</span>
			</div>

			<dl className={styles.metaGrid}>
				<div className={styles.metaItem}>
					<dt>
						<Store size={16} aria-hidden />
						Seller
					</dt>
					<dd>{sellerName}</dd>
				</div>
				<div className={styles.metaItem}>
					<dt>
						<ShieldCheck size={16} aria-hidden />
						Category
					</dt>
					<dd>{product.category.name}</dd>
				</div>
				<div className={styles.metaItem}>
					<dt>
						<BadgeCheck size={16} aria-hidden />
						Variants
					</dt>
					<dd>{product.variants.length}</dd>
				</div>
			</dl>
		</header>
	);
};
