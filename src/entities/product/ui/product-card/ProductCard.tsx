import { MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { FavoriteButton } from '~/features/favorite';
import type { ProductListItem } from '~/shared/api/gql/graphql';
import { mapRoute } from '~/shared/lib';
import { Button } from '~/shared/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '~/shared/ui/card';
import { Typography } from '~/shared/ui/typography';
import styles from './product-card.module.css';

interface Props {
	product: ProductListItem;
	isAuth: boolean;
	priority?: boolean;
}

export const ProductCard: FC<Props> = ({ product, isAuth, priority = false }) => {
	const productPageLink = mapRoute(`/product/${product.slug}/${product.id}`);

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
							sizes="(max-width: 600px) 100vw, 250px"
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
					<Typography>
						From
						<Typography className={styles.price} as="span">
							{' '}
							${product.minPrice}
						</Typography>
					</Typography>

					{isAuth && (
						<Button size="icon" className={styles.messageBtn}>
							<MessageCircle size={20} />
						</Button>
					)}
				</div>

				{!product.inStock && <Typography variant="caption">Out of stock</Typography>}
			</CardFooter>
		</Card>
	);
};
