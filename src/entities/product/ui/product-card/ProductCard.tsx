import { MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { FavoriteButton } from '~/features/favorite';
import type { ProductListItem } from '~/shared/api/gql/graphql';
import { Button } from '~/shared/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '~/shared/ui/card';
import { Typography } from '~/shared/ui/typography';
import { formatPriceRange } from '../../lib/product-formatters';
import styles from './product-card.module.css';

interface Props {
	product: ProductListItem;
	isAuth: boolean;
	priority?: boolean;
	imageSizes: string;
}

export const ProductCard: FC<Props> = ({ product, isAuth, imageSizes, priority = false }) => {
	const productPageLink = `/product/${product.slug}/${product.id}` as const;

	const price = formatPriceRange(product.minPrice, product.maxPrice, 'short');

	return (
		<Card className={styles.card} size="sm" data-out-stock={!product.inStock}>
			<CardHeader className={styles.cardHeader}>
				<FavoriteButton
					isAuth={isAuth}
					productId={product.id}
					className={styles.favorite}
					isLikedByServer={Boolean(product.isLiked)}
				/>
			</CardHeader>

			<CardContent className={styles.cardContent}>
				<Link href={productPageLink} className={styles.imageWrap}>
					{product.thumbnailUrl ? (
						<Image
							src={product.thumbnailUrl}
							alt={product.title}
							fill
							className={styles.image}
							loading={priority ? 'eager' : 'lazy'}
							fetchPriority={priority ? 'high' : 'auto'}
							sizes={imageSizes}
						/>
					) : (
						<div className={styles.placeholder}>
							<span>No photos</span>
						</div>
					)}
				</Link>

				<Link href={productPageLink} className={styles.title}>
					{product.title}
				</Link>
			</CardContent>

			<CardFooter className={styles.cardFooter}>
				<div className={styles.footerWrapper}>
					<Typography className={styles.price} as="span">
						{price}
					</Typography>

					{isAuth && (
						<Button size="icon" className={styles.messageBtn} aria-label="Message to seller">
							<MessageCircle size={20} />
						</Button>
					)}
				</div>

				{!product.inStock && <Typography variant="caption">Out of stock</Typography>}
			</CardFooter>
		</Card>
	);
};
