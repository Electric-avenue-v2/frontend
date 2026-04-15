import { useQuery } from '@tanstack/react-query';
import { buildCategoryTree, CATEGORIES_QUERY_KEY, getCategories } from '~/entities/category';

export const useGetCategories = () => {
	return useQuery({
		queryFn: () => getCategories(),
		queryKey: [CATEGORIES_QUERY_KEY],
		select: data => buildCategoryTree(data)
	});
};
