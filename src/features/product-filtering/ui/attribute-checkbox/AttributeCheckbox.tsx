'use client';

import type { FC } from 'react';
import { Checkbox } from '~/shared/ui/checkbox';
import { useAttributeCheckbox } from '../../hooks/attribute-checkbox.hooks';
import styles from './attribute-checkbox.module.css';

interface Props {
	attributeSlug: string;
	value: string;
	count: number;
}

export const AttributeCheckbox: FC<Props> = ({ attributeSlug, value, count }) => {
	const { isChecked, handleToggle } = useAttributeCheckbox({ attributeSlug, value });

	return (
		<label className={styles.label}>
			<Checkbox checked={isChecked} onCheckedChange={handleToggle} />
			<span className={styles.text}>{value}</span>
			<span className={styles.count}>({count})</span>
		</label>
	);
};
