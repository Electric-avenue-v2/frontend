import clsx from 'clsx';
import { Heart, Mail, User } from 'lucide-react';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import { useAuth } from '~/features/auth';
import { Button, type ButtonProps } from '~/shared/ui/button';
import styles from './header-actions.module.css';

const authActions = [
	{
		link: '/auth/login',
		icon: <User />,
		text: 'Profile'
	},
	{
		link: '/',
		icon: <Mail />,
		text: 'Messages'
	},
	{
		link: '/favorites',
		icon: <Heart />,
		text: 'Favorites'
	}
] as const;

interface HeaderActionsProps extends ComponentProps<'div'> {
	shouldRenderText?: boolean;
	authButtonProps?: ButtonProps;
	noAuthButtonProps?: ButtonProps;
	onClick?: () => void;
}

export const HeaderActions: FC<HeaderActionsProps> = ({
	shouldRenderText = false,
	className,
	authButtonProps,
	noAuthButtonProps,
	onClick,
	...props
}) => {
	const { isAuth } = useAuth();

	if (!isAuth) {
		return (
			<div className={className}>
				<Button size="icon" variant="link" asChild {...noAuthButtonProps}>
					<Link href="/auth/login" aria-label="Login">
						<User />
						{shouldRenderText && 'Login'}
					</Link>
				</Button>
			</div>
		);
	}

	return (
		<div className={clsx(styles.container, className)} {...props}>
			{authActions.map((action, index) => (
				<Button
					key={index}
					size="icon"
					variant="link"
					asChild
					{...authButtonProps}
					onClick={onClick}
				>
					<Link href={action.link} aria-label={action.text}>
						{action.icon}
						{shouldRenderText && action.text}
					</Link>
				</Button>
			))}
		</div>
	);
};
