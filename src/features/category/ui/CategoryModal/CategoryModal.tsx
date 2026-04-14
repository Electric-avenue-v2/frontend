'use client';

import { ArrowLeft, LayoutGrid } from 'lucide-react';
import type { ComponentProps, FC } from 'react';
import { CategoryList } from '~/entities/category';
import type { CategoryTreeItem } from '~/entities/category';
import { useGetCategories } from '~/features/category/hooks/category.hooks';
import { Button } from '~/shared/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '~/shared/ui/dialog';
import { useCategoryNavigation } from '../../hooks/use-category-navigation';
import styles from './category-modal.module.css';

interface CategoryModalProps extends ComponentProps<'button'> {
	open: boolean;
	onOpenChange: (value: boolean) => void;
	shouldRenderTrigger?: boolean;
}

export const CategoryModal: FC<CategoryModalProps> = ({
	open,
	onOpenChange,
	shouldRenderTrigger = false,
	...props
}) => {
	const { data: categories } = useGetCategories();
	const { current, visibleCategories, goInto, goBack, reset } = useCategoryNavigation(
		categories ?? []
	);

	const handleOpenChange = (value: boolean) => {
		if (!value) reset();
		onOpenChange(value);
	};

	const handleSelect = (category: CategoryTreeItem) => {
		if (category.children.length > 0) {
			goInto(category);
		}
	};

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			{shouldRenderTrigger && (
				<DialogTrigger asChild>
					<Button variant="ghost" size="sm" {...props}>
						<LayoutGrid className={styles.gridIcon} />
						Catalog
					</Button>
				</DialogTrigger>
			)}
			<DialogContent className={styles.dialogContent}>
				<div className={styles.wrapper}>
					<DialogHeader className={styles.header}>
						{current && (
							<div>
								<button
									className={styles.backButton}
									type="button"
									onClick={goBack}
									aria-label="Back"
								>
									<ArrowLeft />
								</button>
							</div>
						)}
						<DialogTitle className={styles.title}>{current ? current.name : 'Catalog'}</DialogTitle>
					</DialogHeader>
					<CategoryList
						categories={visibleCategories}
						onSelect={handleSelect}
						onOpenChange={onOpenChange}
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};
