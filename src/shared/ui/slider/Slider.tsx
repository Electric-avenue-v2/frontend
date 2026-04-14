'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import { type ComponentProps, type FC, useMemo } from 'react';
import styles from './slider.module.css';

type Props = ComponentProps<typeof SliderPrimitive.Root>;

export const Slider: FC<Props> = ({ defaultValue, value, min = 0, max = 100, ...props }) => {
	const _values = useMemo(
		() => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
		[value, defaultValue, min, max]
	);

	return (
		<SliderPrimitive.Root
			className={styles.root}
			defaultValue={defaultValue}
			value={value}
			min={min}
			max={max}
			{...props}
		>
			<SliderPrimitive.Track className={styles.track}>
				<SliderPrimitive.Range className={styles.range} />
			</SliderPrimitive.Track>

			{_values.map((_, index) => (
				<SliderPrimitive.Thumb key={index} className={styles.thumb} />
			))}
		</SliderPrimitive.Root>
	);
};
