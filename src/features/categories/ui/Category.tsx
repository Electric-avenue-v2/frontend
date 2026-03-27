import { categoriesApi } from '~/features/categories/api/category.api';
import CategoryDialog from '~/features/categories/ui/CategoryDialog';

const Category = async () => {
	const categories = await categoriesApi.getCategories();

	return <CategoryDialog categories={categories} />;
};

export default Category;
