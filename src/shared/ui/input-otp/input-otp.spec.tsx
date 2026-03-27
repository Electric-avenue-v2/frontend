import { render, screen } from '@testing-library/react';
import { OTPInputContext, type RenderProps } from 'input-otp';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './InputOtp';

describe('InputOTP', () => {
	it('Should render a common container with the passed children', () => {
		const { container } = render(
			<InputOTP maxLength={4}>
				<InputOTPGroup>
					<div data-testid="child-element" />
				</InputOTPGroup>
			</InputOTP>
		);

		const wrapper = container.querySelector('[data-slot="input-otp"]');
		expect(wrapper).toBeInTheDocument();
		expect(screen.getByTestId('child-element')).toBeInTheDocument();
	});
});

describe('InputOTPSlot', () => {
	it('Should render an empty inactive slot by default', () => {
		const { container } = render(<InputOTPSlot index={0} />);

		const slot = container.querySelector('[data-slot="input-otp-slot"]');
		expect(slot).toBeInTheDocument();
		expect(slot).toHaveAttribute('data-active', 'false');
		expect(slot?.textContent).toBe('');
	});

	it('Must correctly display data from the context (character, active state, caret)', () => {
		const mockContextValue: RenderProps = {
			slots: [{ char: '7', isActive: true, hasFakeCaret: true, placeholderChar: '' }],
			isFocused: false,
			isHovering: false
		};

		const { container } = render(
			<OTPInputContext.Provider value={mockContextValue}>
				<InputOTPSlot index={0} />
			</OTPInputContext.Provider>
		);

		const slot = container.querySelector('[data-slot="input-otp-slot"]');
		expect(slot).toBeInTheDocument();
		expect(slot).toHaveAttribute('data-active', 'true');
		expect(slot?.textContent).toBe('7');

		const caret = container.querySelector('.caretContainer');
		expect(caret).toBeInTheDocument();
	});
});

describe('InputOTPSeparator', () => {
	it('Should render a separator with an icon', () => {
		const { container } = render(<InputOTPSeparator />);

		const separator = container.querySelector('[data-slot="input-otp-separator"]');
		expect(separator).toBeInTheDocument();
		expect(separator).toHaveAttribute('role', 'separator');

		const svgIcon = separator?.querySelector('svg');
		expect(svgIcon).toBeInTheDocument();
		expect(svgIcon).toHaveClass('lucide-minus');
	});
});

describe('Integration: InputOTP + Slots', () => {
	it('Should render a complete structure with multiple slots and a separator', () => {
		const { container } = render(
			<InputOTP maxLength={6}>
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
		);

		const groups = container.querySelectorAll('[data-slot="input-otp-group"]');
		expect(groups).toHaveLength(2);

		const slots = container.querySelectorAll('[data-slot="input-otp-slot"]');
		expect(slots).toHaveLength(6);

		const separator = container.querySelector('[data-slot="input-otp-separator"]');
		expect(separator).toBeInTheDocument();
	});
});
