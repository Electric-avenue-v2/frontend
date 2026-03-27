import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './InputOtp';

const meta = {
	title: 'UI/InputOTP',
	component: InputOTP,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'One-time password input component built on top of `input-otp`. Supports grouping, separators, and controlled/uncontrolled usage.'
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		maxLength: {
			control: { type: 'number', min: 1, max: 12, step: 1 },
			description: 'Total number of OTP characters'
		},
		disabled: {
			control: { type: 'boolean' },
			description: 'Disables the input'
		}
	},
	args: {
		maxLength: 6,
		disabled: false,
		children: <></>
	}
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<typeof meta>;

const PlainSlots = ({ count }: { count: number }) => (
	<InputOTPGroup>
		{Array.from({ length: count }, (_, i) => (
			<InputOTPSlot key={i} index={i} />
		))}
	</InputOTPGroup>
);

export const Default: Story = {
	name: 'Default (6 slots)',
	render: ({ maxLength = 6, disabled = false }) => (
		<InputOTP maxLength={maxLength} disabled={disabled} aria-label="Verification code">
			<PlainSlots count={maxLength} />
		</InputOTP>
	)
};

export const WithSeparator: Story = {
	name: 'With separator (3 + 3)',
	render: ({ disabled }) => (
		<InputOTP maxLength={6} disabled={disabled} aria-label="Verification code">
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
	)
};

export const Disabled: Story = {
	args: { disabled: true },
	render: () => (
		<InputOTP maxLength={6} disabled aria-label="Verification code">
			<PlainSlots count={6} />
		</InputOTP>
	)
};

export const Prefilled: Story = {
	name: 'Pre-filled value',
	render: ({ disabled }) => (
		<InputOTP
			maxLength={6}
			defaultValue="123456"
			disabled={disabled}
			aria-label="Verification code"
		>
			<PlainSlots count={6} />
		</InputOTP>
	)
};

export const Controlled: Story = {
	name: 'Controlled with value display',
	render: ({ disabled }) => {
		const [value, setValue] = useState('');
		return (
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
				<InputOTP
					maxLength={6}
					value={value}
					onChange={setValue}
					disabled={disabled}
					aria-label="Verification code"
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
				<p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
					Value: <strong>{value || '—'}</strong>
				</p>
			</div>
		);
	}
};

export const WithOnComplete: Story = {
	name: 'onComplete callback',
	render: ({ disabled }) => {
		const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

		const statusColor: Record<typeof status, string> = {
			idle: '#6b7280',
			success: '#16a34a',
			error: '#dc2626'
		};

		return (
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
				<InputOTP
					maxLength={6}
					disabled={disabled}
					onComplete={value => setStatus(Number(value) % 2 === 0 ? 'success' : 'error')}
					onChange={() => setStatus('idle')}
					aria-label="Verification code"
				>
					<PlainSlots count={6} />
				</InputOTP>
				<p
					style={{
						fontSize: '0.875rem',
						color: statusColor[status],
						margin: 0,
						fontWeight: status !== 'idle' ? 600 : 400
					}}
				>
					{status === 'idle' && 'Enter 6-digit code…'}
					{status === 'success' && '✓ Code accepted'}
					{status === 'error' && '✗ Invalid code'}
				</p>
			</div>
		);
	}
};

export const DigitsOnly: Story = {
	name: 'Pattern: digits only',
	render: ({ disabled }) => (
		<InputOTP
			maxLength={6}
			pattern={REGEXP_ONLY_DIGITS}
			disabled={disabled}
			aria-label="Verification code"
		>
			<PlainSlots count={6} />
		</InputOTP>
	)
};
