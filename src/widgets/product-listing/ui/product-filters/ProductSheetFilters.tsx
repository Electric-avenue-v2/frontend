import { Filter } from 'lucide-react';
import { type FC } from 'react';
import type { SearchAggregations } from '~/shared/api/gql/graphql';
import { Button } from '~/shared/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '~/shared/ui/sheet';
import { ProductListingFilters } from './ProductListingFilters';
import styles from './product-sheet-filters.module.css'

interface ProductSheetFiltersProps {
	aggregations: SearchAggregations;
}

export const ProductSheetFilters: FC<ProductSheetFiltersProps> = ({ aggregations }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button>
					<Filter size={16} />
					Filters
				</Button>
			</SheetTrigger>

			<SheetContent className={styles.sheetContent} side="left">
				<SheetHeader>
					<SheetTitle>Filters</SheetTitle>
				</SheetHeader>
				<ProductListingFilters aggregations={aggregations} />
			</SheetContent>
		</Sheet>
	);
};
