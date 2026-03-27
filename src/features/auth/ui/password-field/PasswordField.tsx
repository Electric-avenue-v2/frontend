import { Eye, EyeOff } from 'lucide-react';
import { type InputHTMLAttributes } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Field, FieldError, FieldLabel } from '~/shared/ui/field';
import { Input } from '~/shared/ui/input';
import styles from './password-field.module.css';

interface PasswordFieldProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
	showPassword: boolean;
	toggleShowPassword: () => void;
	control: Control<T>;
	name: Path<T>;
	label: string;
}

export const PasswordField = <T extends FieldValues>({
	showPassword,
	toggleShowPassword,
	name,
	label,
	control,
	...inputProps
}: PasswordFieldProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState }) => (
				<Field data-invalid={fieldState.invalid}>
					<FieldLabel htmlFor={name}>{label}</FieldLabel>
					<div className={styles.wrapper}>
						<Input
							placeholder="••••••••"
							{...field}
							{...inputProps}
							type={showPassword ? 'text' : 'password'}
							id={String(name)}
							aria-invalid={fieldState.invalid}
							onBlur={(e) => {
								field.onBlur();
								inputProps.onBlur?.(e);
							}}
						/>

						<button
							type="button"
							onClick={toggleShowPassword}
							className={styles.toggleBtn}
						>
							{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
						</button>
					</div>

					{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
				</Field>
			)}
		/>
	);
};
