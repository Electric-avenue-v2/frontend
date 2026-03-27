import type { InputHTMLAttributes } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { Field, FieldError, FieldLabel } from '~/shared/ui/field';
import { Input } from '~/shared/ui/input';

interface FormFieldProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
	name: Path<T>;
	label: string;
	control: Control<T>;
}

const FormField = <T extends FieldValues>({
	name,
	label,
	control,
	...inputProps
}: FormFieldProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState }) => (
				<Field data-invalid={fieldState.invalid}>
					<FieldLabel htmlFor={String(name)}>{label}</FieldLabel>

					<Input {...field} {...inputProps} id={String(name)} aria-invalid={fieldState.invalid} />

					{fieldState.error && <FieldError errors={[fieldState.error]} />}
				</Field>
			)}
		/>
	);
};

export { FormField };
