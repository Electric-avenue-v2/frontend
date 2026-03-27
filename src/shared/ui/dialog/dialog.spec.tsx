import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from './Dialog';

beforeAll(() => {
	HTMLDialogElement.prototype.showModal = jest.fn(function () {
		this.open = true;
	});

	HTMLDialogElement.prototype.close = jest.fn(function () {
		this.open = false;
	});
});

describe('Dialog', () => {
	it('opens when trigger is clicked', () => {
		render(
			<Dialog>
				<DialogTrigger>Open</DialogTrigger>

				<DialogContent>
					<DialogTitle>Test dialog</DialogTitle>
				</DialogContent>
			</Dialog>
		);

		fireEvent.click(screen.getByText('Open'));

		expect(screen.getByText('Test dialog')).toBeInTheDocument();
	});

	it('closes when DialogClose is clicked', () => {
		render(
			<Dialog>
				<DialogTrigger>Open</DialogTrigger>

				<DialogContent>
					<DialogTitle>Dialog</DialogTitle>
					<DialogClose>Close</DialogClose>
				</DialogContent>
			</Dialog>
		);

		fireEvent.click(screen.getByText('Open'));

		const dialog = document.querySelector('dialog')!;

		fireEvent.click(screen.getByText('Close'));

		expect(dialog.open).toBe(false);
	});

	it('closes when backdrop is clicked', () => {
		render(
			<Dialog>
				<DialogTrigger>Open</DialogTrigger>

				<DialogContent>
					<DialogTitle>Dialog</DialogTitle>
				</DialogContent>
			</Dialog>
		);

		fireEvent.click(screen.getByText('Open'));

		const dialog = document.querySelector('dialog')!;

		fireEvent.click(dialog);

		expect(dialog.open).toBe(false);
	});

	it('works in controlled mode', () => {
		function Controlled() {
			const [open, setOpen] = useState(false);

			return (
				<Dialog open={open} onOpenChange={setOpen}>
					<DialogTrigger>Open</DialogTrigger>

					<DialogContent>
						<DialogTitle>Controlled dialog</DialogTitle>
					</DialogContent>
				</Dialog>
			);
		}

		render(<Controlled />);

		fireEvent.click(screen.getByText('Open'));

		expect(screen.getByText('Controlled dialog')).toBeInTheDocument();
	});

	it('supports asChild trigger', () => {
		render(
			<Dialog>
				<DialogTrigger asChild>
					<button>Custom trigger</button>
				</DialogTrigger>

				<DialogContent>
					<DialogTitle>Dialog</DialogTitle>
				</DialogContent>
			</Dialog>
		);

		fireEvent.click(screen.getByText('Custom trigger'));

		expect(screen.getByText('Dialog')).toBeInTheDocument();
	});

	it('closes when Escape key is pressed', () => {
		render(
			<Dialog>
				<DialogTrigger>Open</DialogTrigger>

				<DialogContent>
					<DialogTitle>Dialog</DialogTitle>
				</DialogContent>
			</Dialog>
		);

		fireEvent.click(screen.getByText('Open'));

		const dialog = document.querySelector('dialog')!;

		fireEvent.keyDown(dialog, { key: 'Escape' });

		dialog.close();

		expect(dialog.open).toBe(false);
	});

	it('moves focus inside dialog when opened', async () => {
		const user = userEvent.setup();

		render(
			<Dialog>
				<DialogTrigger>Open</DialogTrigger>

				<DialogContent>
					<DialogTitle>Dialog</DialogTitle>
					<button>Action</button>
				</DialogContent>
			</Dialog>
		);

		const trigger = screen.getByText('Open');

		await user.click(trigger);

		const actionButton = screen.getByText('Action');

		expect(actionButton).toBeInTheDocument();
	});
});
