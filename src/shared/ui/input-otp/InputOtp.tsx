'use client';

import clsx from 'clsx';
import { OTPInput, OTPInputContext } from 'input-otp';
import { MinusIcon } from 'lucide-react';
import { type ComponentProps, type FC, useContext } from 'react';
import styles from './input-otp.module.css';

type InputOTPProps = ComponentProps<typeof OTPInput> & {
	containerClassName?: string;
};

const InputOTP: FC<InputOTPProps> = ({ className, containerClassName, ...props }) => {
	return (
		<OTPInput
			data-slot="input-otp"
			containerClassName={clsx(styles.container, containerClassName)}
			className={clsx(styles.input, className)}
			{...props}
		/>
	);
};

const InputOTPGroup: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
	return <div data-slot="input-otp-group" className={clsx(styles.group, className)} {...props} />;
};

type InputOTPSlotProps = ComponentProps<'div'> & { index: number };

const InputOTPSlot: FC<InputOTPSlotProps> = ({ index, className, ...props }) => {
	const inputOTPContext = useContext(OTPInputContext);

	const slotContext = inputOTPContext?.slots?.[index];
	const char = slotContext?.char ?? null;
	const hasFakeCaret = slotContext?.hasFakeCaret ?? false;
	const isActive = slotContext?.isActive ?? false;

	return (
		<div
			data-slot="input-otp-slot"
			data-active={isActive}
			className={clsx(styles.slot, className)}
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<div className={styles.caretContainer}>
					<div className={styles.caret} />
				</div>
			)}
		</div>
	);
};

const InputOTPSeparator: FC<ComponentProps<'div'>> = ({ ...props }) => {
	return (
		<div data-slot="input-otp-separator" role="separator" {...props}>
			<MinusIcon className={styles.separator} />
		</div>
	);
};

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
