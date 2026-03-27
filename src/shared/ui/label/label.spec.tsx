import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label component', () => {
	it('renders children correctly', () => {
		render(<Label>Test</Label>);

		const labelElement = screen.getByText('Test');

		expect(labelElement).toBeInTheDocument();
		expect(labelElement.tagName).toBe('LABEL');
	});

	it('applies custom className', () => {
		render(<Label className="custom-test-class">Label</Label>);

		const labelElement = screen.getByText('Label');

		expect(labelElement).toHaveClass('custom-test-class');
	});

	it('forwards additional props (htmlFor, id, etc.)', () => {
		render(
			<Label htmlFor="test-input" id="test-label-id">
			Label for input
		</Label>
	);

		const labelElement = screen.getByText('Label for input');

		expect(labelElement).toHaveAttribute('for', 'test-input');
		expect(labelElement).toHaveAttribute('id', 'test-label-id');
	});

	it('has the correct data-slot attribute', () => {
		render(<Label>Slot</Label>);

		const labelElement = screen.getByText('Slot');

		expect(labelElement).toHaveAttribute('data-slot', 'label');
	});
});
