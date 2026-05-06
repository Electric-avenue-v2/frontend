'use client';

import { Search, ShoppingCart } from 'lucide-react';
import type { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '~/shared/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '~/shared/ui/card';
import { Typography } from '~/shared/ui/typography';
import styles from './product-empty-state.module.css';

export const ProductEmptyState = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const q = searchParams.get('q');
	return (
		<div className={styles.wrapper}>
			<Card className={styles.card}>
				<CardHeader className={styles.header}>
					<div className={styles.iconWrapper}>
						<ShoppingCart className={styles.icon} />
					</div>

					<Typography variant="h2" className={styles.title}>
						No products found
					</Typography>
				</CardHeader>

				<CardContent className={styles.content}>
					<Typography variant="body-sm" className={styles.description}>
						We couldn&apos;t find any items matching your search or filters. Try adjusting your
						search parameters.
					</Typography>

					<div className={styles.suggestionsHeader}>
						<Search className={styles.suggestionsIcon} />
						<Typography variant="body-sm">Popular searches</Typography>
					</div>

					<div className={styles.tags}>
						{['Laptop', 'Headphones', 'Gaming PC', 'Samsung'].map(tag => (
							<a key={tag} href={`/search?q=${tag}`} className={styles.tag}>
								{tag}
							</a>
						))}
					</div>
				</CardContent>

				<CardFooter className={styles.footer}>
					<Button className={styles.primaryButton} onClick={() => (window.location.href = '/')}>
						Go to Home
					</Button>

					<Button
						variant="outline"
						onClick={() => {
							const params = new URLSearchParams();

							if (q) {
								params.set('q', q);
							}

							const queryString = params.toString();

							router.push(
								queryString ? (`${pathname}?${queryString}` as Route) : (pathname as Route)
							);
						}}
					>
						Reset filters
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};
