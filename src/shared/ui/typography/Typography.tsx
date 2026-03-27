import { clsx } from 'clsx';
import React from 'react';
import styles from './typography.module.css';

type TextVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'lead'
	| 'body'
	| 'body-sm'
	| 'caption'
	| 'label'
	| 'overline'
	| 'code'
	| 'mono';

type TextColor =
	| 'default'
	| 'muted'
	| 'subtle'
	| 'inverted'
	| 'accent'
	| 'destructive'
	| 'success'
	| 'warning';

type TextAlign = 'left' | 'center' | 'right' | 'justify';

type TextWeight =
	| 'thin'
	| 'light'
	| 'regular'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold'
	| 'black';

type TextTracking = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

type TextLeading = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';

type AsProp<C extends React.ElementType> = {
	as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProps<
	C extends React.ElementType,
	Props = object
> = React.PropsWithChildren<Props & AsProp<C>> &
	Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type TypographyOwnProps = {
	variant?: TextVariant;
	color?: TextColor;
	align?: TextAlign;
	weight?: TextWeight;
	tracking?: TextTracking;
	leading?: TextLeading;
	truncate?: boolean;
	clamp?: 1 | 2 | 3 | 4 | 5;
	className?: string;
};

type TypographyProps<C extends React.ElementType = 'p'> = PolymorphicComponentProps<
	C,
	TypographyOwnProps
>;

const DEFAULT_TAG: Record<TextVariant, React.ElementType> = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	lead: 'p',
	body: 'p',
	'body-sm': 'p',
	caption: 'span',
	label: 'span',
	overline: 'span',
	code: 'code',
	mono: 'span'
};

function Typography<C extends React.ElementType = 'p'>({
	as,
	variant = 'body',
	color = 'default',
	align,
	weight,
	tracking,
	leading,
	truncate = false,
	clamp,
	className,
	children,
	...rest
}: TypographyProps<C>) {
	const Tag: React.ElementType = as || DEFAULT_TAG[variant];

	return (
		<Tag
			className={clsx(
				styles.base,
				styles[`variant-${variant}`],
				styles[`color-${color}`],
				align && styles[`align-${align}`],
				weight && styles[`weight-${weight}`],
				tracking && styles[`tracking-${tracking}`],
				leading && styles[`leading-${leading}`],
				truncate && styles.truncate,
				clamp && styles.clamp,
				clamp && styles[`clamp-${clamp}`],
				className
			)}
			{...rest}
		>
			{children}
		</Tag>
	);
}

export { Typography };
