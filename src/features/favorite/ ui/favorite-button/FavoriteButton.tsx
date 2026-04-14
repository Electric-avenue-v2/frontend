'use client';

import clsx from 'clsx';
import { HeartIcon } from 'lucide-react';
import type { ComponentProps, FC, MouseEvent } from 'react';
import { useToggleFavoriteMutation } from '../../hooks/favorite-mutations.hooks';
import { useProductLikeStatus } from '../../hooks/favorite.hooks';
import { useFavoritesStore } from '../../model/favorite.store';
import styles from './favorite-button.module.css';

interface Props extends Omit<ComponentProps<'button'>, 'onClick'> {
	productId: string;
	isAuth: boolean;
	isLikedByServer?: boolean;
}

export const FavoriteButton: FC<Props> = ({
	productId,
	isAuth,
	isLikedByServer = false,
	className,
	...rest
}) => {
	const isLiked = useProductLikeStatus(productId, isAuth, isLikedByServer);
	const toggleGuestFavorite = useFavoritesStore(state => state.toggleGuestFavorite);
	const { mutate } = useToggleFavoriteMutation();

	const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (!isAuth) {
			toggleGuestFavorite(productId);
			return;
		}

		mutate({ productId, nextState: !isLiked });
	};

	return (
		<button
			{...rest}
			onClick={handleToggle}
			aria-label="In favorites"
			data-active={isLiked}
			className={clsx(styles.heartButton, className)}
		>
			<HeartIcon size={19} />
		</button>
	);
};
