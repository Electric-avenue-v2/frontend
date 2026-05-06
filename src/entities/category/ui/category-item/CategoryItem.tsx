import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';
import { type CategoryTreeItem } from '~/entities/category';
import { Button } from '~/shared/ui/button';
import { Typography } from '~/shared/ui/typography';
import styles from './category-item.module.css';

interface CategoryItemProps {
	category: CategoryTreeItem;
	onClick: (category: CategoryTreeItem) => void;
	onOpenChange: (value: boolean) => void;
}

export const CategoryItem: FC<CategoryItemProps> = ({ category, onClick, onOpenChange }) => {
	const hasChildren = category.children.length > 0;

	return (
		<Button
			asChild={!hasChildren}
			className={styles.button}
			variant="ghost"
			onClick={hasChildren ? () => onClick(category) : undefined}
		>
			{hasChildren ? (
				<>
					{category.icon && (
						<Image
							className={styles.icon}
							src={category.icon}
							alt={category.name}
							width={22}
							height={22}
						/>
					)}
					<Typography className={styles.text}>{category.name}</Typography>
					<ArrowRight size={16} />
				</>
			) : (
				<Link onClick={() => onOpenChange(false)} href={`/category/${category.slug}` as const}>
					{category.icon && (
						<Image
							className={styles.icon}
							src={category.icon}
							alt={category.name}
							width={22}
							height={22}
						/>
					)}
					<Typography className={styles.text}>{category.name}</Typography>
				</Link>
			)}
		</Button>
	);
};
