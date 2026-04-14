import { useQuery } from '@tanstack/react-query';
import { buildCategoryTree, GetCategoriesDocument } from '~/entities/category';
import { clientFetcher } from '~/shared/api';

export const useGetCategories = () => {
	return useQuery({
		queryFn: () => clientFetcher(GetCategoriesDocument),
		queryKey: ['categories'],
		select: data => buildCategoryTree(data.categories)
	});
};
