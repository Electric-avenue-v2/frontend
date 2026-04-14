import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { AttributeCheckbox, PriceFilter } from '~/features/product-filtering';
import type { SearchAggregations } from '~/shared/api/gql/graphql';
import { Accordion } from '~/shared/ui/accordion';
import styles from './product-listing-filters.module.css';

interface Props extends ComponentProps<'div'> {
	aggregations: SearchAggregations;
}

export const ProductListingFilters: FC<Props> = ({ aggregations, className, ...props }) => {
	const hasAttributes = aggregations.attributes && aggregations.attributes.length > 0;
	const priceRange = aggregations.priceRange;
	const hasPriceRange = priceRange != null;

	return (
		<div className={clsx(styles.container, className)} {...props}>
			{hasPriceRange && (
				<Accordion header="Price ($)" open>
					<PriceFilter minBound={priceRange.min} maxBound={priceRange.max} />
				</Accordion>
			)}

			{hasAttributes &&
				aggregations.attributes.map(attribute => (
					<Accordion className={styles.accordion} key={attribute.slug} header={attribute.name} open>
						{attribute.values.map(option => (
							<AttributeCheckbox
								key={option.value}
								attributeSlug={attribute.slug}
								value={option.value}
								count={option.count}
							/>
						))}
					</Accordion>
				))}
		</div>
	);
};
