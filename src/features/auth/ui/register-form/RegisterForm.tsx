'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useRegister } from '~/features/auth/hooks/auth.hooks';
import { usePasswordToggle } from '~/features/auth/hooks/usePasswordToggle';
import { registerSchema, type RegisterSchema } from '~/features/auth/model/register.schema';
import { AuthFormShell } from '~/features/auth/ui/auth-form-shell/AuthFormShell';
import { PasswordField } from '~/features/auth/ui/password-field/PasswordField';
import { Button } from '~/shared/ui/button/Button';
import { FormField } from '~/shared/ui/form-field';
import styles from './register-form.module.css';

export const RegisterForm = () => {
	const { mutate, isPending } = useRegister();
	const { showPassword, toggle } = usePasswordToggle();
	const [focusedField, setFocusedField] = useState<keyof RegisterSchema | null>(null);
	const form = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: '',
			password: '',
			firstName: '',
			lastName: ''
		}
	});

	const onSubmit = async (data: RegisterSchema) => {
		mutate({
			input: {
				email: data.email,
				password: data.password,
				firstName: data.firstName,
				lastName: data.lastName
			}
		});
	};

	const [emailValue, passwordValue, firstNameValue, lastNameValue] = useWatch({
		control: form.control,
		name: ['email', 'password', 'firstName', 'lastName']
	});

	const getLookOffset = () => {
		if (!focusedField) return 0;
		switch (focusedField) {
			case 'email':
				return Math.min(emailValue.length * 2, 100);
			case 'password':
				return Math.min(passwordValue.length * 2, 100);
			case 'firstName':
				return Math.min(firstNameValue.length * 2, 100);
			case 'lastName':
				return Math.min(lastNameValue.length * 2, 100);
			default:
				return 0;
		}
	};

	return (
		<AuthFormShell
			title="Welcome"
			footerText="Already regitred ?"
			footerLinkText="Sign in"
			footerLinkHref='/auth/login'
			mascotProps={{
				isHandsUp: focusedField === 'password' && !showPassword,
				isChecking: focusedField !== null,
				lookOffset: getLookOffset()
			}}
		>
			<form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
				<div className={`${styles.formRow} ${styles.formRowDouble}`}>
					<FormField
						control={form.control}
						name="firstName"
						label="First name"
						placeholder="John"
						onFocus={() => setFocusedField('firstName')}
						onBlur={() => setFocusedField(null)}
					/>

					<FormField
						control={form.control}
						name="lastName"
						label="Last name"
						placeholder="Doe"
						onFocus={() => setFocusedField('lastName')}
						onBlur={() => setFocusedField(null)}
					/>
				</div>

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
					{isPending ? 'Loading...' : 'Register'}
				</Button>
			</form>
		</AuthFormShell>
	);
};
