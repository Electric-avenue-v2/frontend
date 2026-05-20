import Image from 'next/image';
import type { FC } from 'react';
import type { ProductByIdResponse } from '~/entities/product';
import styles from './product-details-widget.module.css';

interface ProductGalleryProps {
	product: ProductByIdResponse;
}

export const ProductGallery: FC<ProductGalleryProps> = ({ product }) => {
	return (
		<div className={styles.gallery} aria-label={`${product.title} gallery`}>
			<div className={styles.imageFrame}>
				{product.thumbnailUrl ? (
					<Image
						src={product.thumbnailUrl}
						alt={product.title}
						fill
						priority
						className={styles.image}
						sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 560px"
					/>
				) : (
					<div className={styles.placeholder}>No image</div>
				)}
			</div>
		</div>
	);
};
