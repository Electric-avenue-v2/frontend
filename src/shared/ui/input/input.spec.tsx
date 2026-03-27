import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
	it('renders input element', () => {
		render(<Input placeholder="Enter text" />);

		const input = screen.getByPlaceholderText('Enter text');

		expect(input).toBeInTheDocument();
	});

	it('passes props to input', () => {
		render(<Input type="email" placeholder="Email" />);

		const input = screen.getByPlaceholderText('Email');

		expect(input).toHaveAttribute('type', 'email');
	});

	it('handles user typing', async () => {
		const user = userEvent.setup();

		render(<Input />);

		const input = screen.getByRole('textbox');

		await user.type(input, 'hello');

		expect(input).toHaveValue('hello');
	});

	it('applies aria-invalid attribute', () => {
		render(<Input aria-invalid="true" />);

		const input = screen.getByRole('textbox');

		expect(input).toHaveAttribute('aria-invalid', 'true');
	});

	it('can be disabled', () => {
		render(<Input disabled />);

		const input = screen.getByRole('textbox');

		expect(input).toBeDisabled();
	});

	it('merges className', () => {
		render(<Input className="custom-class" />);

		const input = screen.getByRole('textbox');

		expect(input).toHaveClass('custom-class');
	});
});
