import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import styles from './button.module.css';

describe('Button', () => {
	it('renders correctly with default props', () => {
		render(<Button>Click me</Button>);
		const button = screen.getByRole('button', { name: 'Click me' });

		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute('data-variant', 'default');
		expect(button).toHaveAttribute('data-size', 'default');
		expect(button).toHaveClass(styles.button);
	});

	it('applies custom variant and size', () => {
		render(
			<Button variant="destructive" size="lg">
				Delete
			</Button>
		);
		const button = screen.getByRole('button', { name: 'Delete' });

		expect(button).toHaveAttribute('data-variant', 'destructive');
		expect(button).toHaveAttribute('data-size', 'lg');
	});

	it('merges custom className with default styles', () => {
		render(<Button className="custom-class">Test</Button>);
		const button = screen.getByRole('button', { name: 'Test' });

		expect(button).toHaveClass(styles.button);
		expect(button).toHaveClass('custom-class');
	});

	it('handles onClick events', async () => {
		const handleClick = jest.fn();
		const user = userEvent.setup();

		render(<Button onClick={handleClick}>Click me</Button>);
		const button = screen.getByRole('button', { name: 'Click me' });

		await user.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('passes standard HTML attributes correctly', () => {
		render(
			<Button disabled aria-label="custom-label">
				Disabled
			</Button>
		);
		const button = screen.getByRole('button', { name: 'custom-label' });

		expect(button).toBeDisabled();
	});

	it('renders as a different element when asChild is true', () => {
		render(
			<Button asChild variant="outline">
				<a href="https://example.com">Link Button</a>
			</Button>
		);

		const link = screen.getByRole('link', { name: 'Link Button' });

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', 'https://example.com');
		expect(link).toHaveAttribute('data-variant', 'outline');
		expect(link).toHaveClass(styles.button);
		expect(screen.queryByRole('button')).not.toBeInTheDocument();
	});
});
