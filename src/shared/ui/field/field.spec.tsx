import { render, screen } from '@testing-library/react';
import { Field, FieldContent, FieldDescription, FieldError, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle } from './Field';

describe('Field components', () => {
	test('renders FieldSet', () => {
		render(<FieldSet>content</FieldSet>);

		const fieldset = screen.getByText('content');

		expect(fieldset).toBeInTheDocument();
		expect(fieldset.closest('fieldset')).toHaveAttribute('data-slot', 'field-set');
	});

	test('renders FieldLegend with default variant', () => {
		render(<FieldLegend>Legend</FieldLegend>);

		const legend = screen.getByText('Legend');

		expect(legend).toBeInTheDocument();
		expect(legend).toHaveAttribute('data-variant', 'legend');
	});

	test('renders FieldLegend with label variant', () => {
		render(<FieldLegend variant="label">Legend</FieldLegend>);

		const legend = screen.getByText('Legend');

		expect(legend).toHaveAttribute('data-variant', 'label');
	});

	test('renders FieldContent', () => {
		render(
			<FieldContent>
				<span>child</span>
			</FieldContent>
		);

		expect(screen.getByText('child')).toBeInTheDocument();
	});

	test('renders FieldLabel', () => {
		render(<FieldLabel>Label</FieldLabel>);

		const label = screen.getByText('Label');

		expect(label).toBeInTheDocument();
		expect(label).toHaveAttribute('data-slot', 'field-label');
	});

	test('renders FieldTitle', () => {
		render(<FieldTitle>Title</FieldTitle>);

		const title = screen.getByText('Title');

		expect(title).toHaveAttribute('data-slot', 'field-title');
	});

	test('renders FieldDescription', () => {
		render(<FieldDescription>Description</FieldDescription>);

		const description = screen.getByText('Description');

		expect(description).toHaveAttribute('data-slot', 'field-description');
	});

	test('renders FieldSeparator without content', () => {
		render(<FieldSeparator />);

		const separator = screen.getByTestId('field-separator');

		expect(separator).toBeInTheDocument();
	});

	test('renders FieldSeparator with content', () => {
		render(<FieldSeparator>OR</FieldSeparator>);

		expect(screen.getByText('OR')).toBeInTheDocument();
	});

	test('FieldError returns null when no errors', () => {
		const { container } = render(<FieldError />);

		expect(container).toBeEmptyDOMElement();
	});

	test('FieldError renders single error message', () => {
		render(<FieldError errors={[{ message: 'Email is required' }]} />);

		expect(screen.getByText('Email is required')).toBeInTheDocument();
	});

	test('FieldError renders multiple unique errors', () => {
		render(
			<FieldError
				errors={[{ message: 'Required' }, { message: 'Invalid format' }, { message: 'Required' }]}
			/>
		);

		expect(screen.getByText('Required')).toBeInTheDocument();
		expect(screen.getByText('Invalid format')).toBeInTheDocument();

		const items = screen.getAllByRole('listitem');
		expect(items.length).toBe(2);
	});

	test('FieldError children override errors', () => {
		render(<FieldError errors={[{ message: 'Error' }]}>Custom error</FieldError>);

		expect(screen.getByText('Custom error')).toBeInTheDocument();
		expect(screen.queryByText('Error')).not.toBeInTheDocument();
	});
});
