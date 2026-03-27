'use client';

import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { Mail } from 'lucide-react';
import { type FC, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useResendOtp, useVerifyOtp } from '~/features/auth/hooks/auth.hooks';
import { Button } from '~/shared/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '~/shared/ui/input-otp';
import { Typography } from '~/shared/ui/typography';
import styles from './confirmation-form.module.css';

interface ConfirmationFormProps {
	email: string;
}

export const ConfirmationForm: FC<ConfirmationFormProps> = ({ email }) => {
	const { mutate: mutateVerify, isPending: isVerifying } = useVerifyOtp();
	const { mutate: mutateResend, isPending: isResending } = useResendOtp();
	const [value, setValue] = useState('');
	const [timeLeft, setTimeLeft] = useState(0);

	const handleSubmit = () => {
		if (value.length !== 6) {
			toast.error('Please enter the 6-digit code');
			return;
		}

		mutateVerify({
			input: {
				email: email,
				otpCode: value
			}
		});
	};

	const handleResend = () => {
		mutateResend({ input: { email } });
		setTimeLeft(60);
	};

	useEffect(() => {
		if (timeLeft <= 0) return;

		const intervalId = setInterval(() => {
			setTimeLeft(prev => prev - 1);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [timeLeft]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.iconWrapper}>
					<Mail size={35} />
				</div>
				<Typography variant="h5" as="h2">
					Submit your email
				</Typography>
				<Typography className={styles.description}>
					The verification code has been sent to your email
				</Typography>
			</div>

			<div className={styles.otpInputWrapper}>
				<InputOTP
					maxLength={6}
					pattern={REGEXP_ONLY_DIGITS}
					value={value}
					onChange={value => setValue(value)}
					disabled={isVerifying}
				>
					<InputOTPGroup>
						<InputOTPSlot index={0} />
						<InputOTPSlot index={1} />
						<InputOTPSlot index={2} />
					</InputOTPGroup>
					<InputOTPSeparator />
					<InputOTPGroup>
						<InputOTPSlot index={3} />
						<InputOTPSlot index={4} />
						<InputOTPSlot index={5} />
					</InputOTPGroup>
				</InputOTP>
			</div>

			<Button onClick={handleSubmit} type="submit" disabled={isVerifying}>
				{isVerifying ? 'Loading...' : 'Submit'}
			</Button>

			<div className={styles.footer}>
				<Typography variant="caption">Code is valid for 10 minutes</Typography>
				<Button variant="link" onClick={handleResend} disabled={isResending || timeLeft > 0}>
					{timeLeft > 0
						? `Send again in ${timeLeft}s`
						: isResending
							? 'Sending...'
							: 'Send code again'}
				</Button>
			</div>
		</div>
	);
};
