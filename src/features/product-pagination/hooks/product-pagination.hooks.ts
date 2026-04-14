import { usePathname, useSearchParams } from 'next/navigation';
import type { PaginationMeta } from '~/shared/api/gql/graphql';
import { generatePagination } from '../lib/generate-pagination';

export const useProductPagination = (meta: PaginationMeta) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const createPageUrl = (pageNumber: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('page', pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	const pages = generatePagination(meta.currentPage, meta.totalPages);

	return {
		pages,
		createPageUrl,
		prevUrl: createPageUrl(meta.currentPage - 1),
		nextUrl: createPageUrl(meta.currentPage + 1)
	};
};
