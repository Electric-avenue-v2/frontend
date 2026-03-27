import { type Category } from '~/features/categories/model/category.types';

class CategoryApi {
	async getCategories(): Promise<Category[]> {
		// const res = await fetch(`${API_URL}/categories`, {
		//   next: {
		//     revalidate: 60 * 60, // 1h
		//   },
		// });
		//
		// if (!res.ok) {
		//   throw new Error('Failed to fetch categories');l
		// }
		//
		// return res.json();
		return [];
	}
}

export const categoriesApi = new CategoryApi();
