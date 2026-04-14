import type { FC } from 'react';
import { AttributeCheckbox, PriceFilter } from '~/features/product-filtering';
import type { SearchAggregations } from '~/shared/api/gql/graphql';
import { Accordion } from '~/shared/ui/accordion';
import styles from './product-listing-filters.module.css'

interface Props {
	aggregations: SearchAggregations;
}

export const ProductListingFilters: FC<Props> = ({ aggregations }) => {
	const hasAttributes = aggregations.attributes && aggregations.attributes.length > 0;
	const priceRange = aggregations.priceRange;
	const hasPriceRange = priceRange != null;

	return (
		<div className={styles.container}>
			{hasPriceRange && (
				<Accordion header="Price ($)" open>
					<PriceFilter minBound={priceRange.min} maxBound={priceRange.max} />
				</Accordion>
			)}

			{hasAttributes && aggregations.attributes.map(attribute => (
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
