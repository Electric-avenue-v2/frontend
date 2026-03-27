'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLogin } from '~/features/auth/hooks/auth.hooks';
import { usePasswordToggle } from '~/features/auth/hooks/usePasswordToggle';
import { loginSchema, type LoginSchema } from '~/features/auth/model/login.schema';
import { AuthFormShell } from '~/features/auth/ui/auth-form-shell/AuthFormShell';
import { PasswordField } from '~/features/auth/ui/password-field/PasswordField';
import { Button } from '~/shared/ui/button/Button';
import { FormField } from '~/shared/ui/form-field';
import styles from './login-form.module.css';

export const LoginForm = () => {
	const searchParams = useSearchParams();
	const { mutate, isPending } = useLogin();
	const { showPassword, toggle } = usePasswordToggle();
	const [focusedField, setFocusedField] = useState<keyof LoginSchema | null>(null);
	const form = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: searchParams.get('email') ?? '',
			password: ''
		}
	});

	const onSubmit = async (data: LoginSchema) => {
		mutate({
			input: {
				email: data.email,
				password: data.password
			}
		});
	};

	const [emailValue, passwordValue] = useWatch({
		control: form.control,
		name: ['email', 'password']
	});

	return (
		<AuthFormShell
			title="Welcome back!"
			footerText="Don&#39;t have an account yet?"
			footerLinkText="Sign up"
			footerLinkHref="/auth/register"
			mascotProps={{
				isHandsUp: focusedField === 'password' && !showPassword,
				isChecking: focusedField === 'email' || (focusedField === 'password' && showPassword),
				lookOffset: focusedField === 'email' ? emailValue.length * 2 : passwordValue.length * 2
			}}
		>
			<form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
				<FormField
					control={form.control}
					name="email"
					label="Email"
					type="email"
					placeholder="example@gmail.com"
					onFocus={() => setFocusedField('email')}
					onBlur={() => setFocusedField(null)}
				/>

				<PasswordField
					control={form.control}
					name="password"
					label="Password"
					onFocus={() => setFocusedField('password')}
					onBlur={() => setFocusedField(null)}
					showPassword={showPassword}
					toggleShowPassword={toggle}
				/>

				<Button type="submit" disabled={isPending}>
					{isPending ? 'Loading...' : 'Login'}
				</Button>
			</form>
		</AuthFormShell>
	);
};
