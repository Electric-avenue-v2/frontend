'use client';

import { type FC } from 'react';
import { Button } from '~/shared/ui/button';
import { Input } from '~/shared/ui/input';
import { Slider } from '~/shared/ui/slider';
import { usePriceFilter } from '../../hooks/use-price-filter';
import styles from './price-filter.module.css';

interface Props {
	minBound: number;
	maxBound: number;
}

export const PriceFilter: FC<Props> = ({ minBound, maxBound }) => {
	const {
		range,
		inputValues,
		handleInputChange,
		handleBlur,
		handleSliderChange,
		handleSliderCommit,
		applyFilter
	} = usePriceFilter({ minBound, maxBound });

	if (minBound >= maxBound) return null;

	return (
		<div className={styles.container}>
			<div className={styles.inputsRow}>
				<Input
					type="number"
					value={inputValues[0]}
					min={minBound}
					onChange={handleInputChange(0)}
					onBlur={handleBlur}
					className={styles.input}
				/>
				<span className={styles.separator}>-</span>
				<Input
					type="number"
					value={inputValues[1]}
					max={maxBound}
					onChange={handleInputChange(1)}
					onBlur={handleBlur}
					className={styles.input}
				/>
				<Button onClick={() => applyFilter()}>ОК</Button>
			</div>

			<div className={styles.sliderWrapper}>
				<Slider
					min={minBound}
					max={maxBound}
					value={range}
					onValueChange={handleSliderChange}
					onValueCommit={handleSliderCommit}
				/>
			</div>
		</div>
	);
};
