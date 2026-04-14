// src/features/product-pagination/ui/product-pagination.tsx
'use client';

import { type FC } from 'react';
import type { PaginationMeta } from '~/shared/api/gql/graphql';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from '~/shared/ui/pagination';
import { useProductPagination } from '../../hooks/product-pagination.hooks';
import styles from './product-pagination.module.css';

interface ProductPaginationProps {
	meta: PaginationMeta;
}

export const ProductPagination: FC<ProductPaginationProps> = ({ meta }) => {
	const { pages, createPageUrl, prevUrl, nextUrl } = useProductPagination(meta);

	if (meta.totalPages <= 1) return null;

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					{meta.hasPrevPage ? (
						<PaginationPrevious href={prevUrl} />
					) : (
						<span className={styles.disabled}>
							<PaginationPrevious href="#" />
						</span>
					)}
				</PaginationItem>

				{pages.map((page, index) => {
					if (page === '...') {
						return (
							<PaginationItem key={`ellipsis-${index}`}>
								<PaginationEllipsis />
							</PaginationItem>
						);
					}

					return (
						<PaginationItem key={page}>
							<PaginationLink href={createPageUrl(page)} isActive={page === meta.currentPage}>
								{page}
							</PaginationLink>
						</PaginationItem>
					);
				})}

				<PaginationItem>
					{meta.hasNextPage ? (
						<PaginationNext href={nextUrl} />
					) : (
						<span className={styles.disabled}>
							<PaginationNext href="#" />
						</span>
					)}
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};
