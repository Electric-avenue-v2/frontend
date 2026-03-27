import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '../button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './Dialog';

const meta: Meta<typeof Dialog> = {
	title: 'UI/Dialog',
	component: Dialog,
	tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Open Dialog</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Dialog Title</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					This is a description of the dialog. You can put any content here.
				</DialogDescription>
				<DialogFooter>
					<DialogClose asChild>
						<Button>Close</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
};

export const Interaction: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Open Dialog</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Dialog Title</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					Try clicking close button or outside to close the dialog.
				</DialogDescription>
				<DialogFooter>
					<DialogClose asChild>
						<Button>Close</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
	play: async ({ canvasElement }) => {
		const { within, userEvent } = await import('@storybook/testing-library');

		const canvas = within(canvasElement);

		const openButton = canvas.getByRole('button', { name: /open dialog/i });
		await userEvent.click(openButton);

		const buttons = canvas.getAllByRole('button', { name: /close/i });
		await userEvent.click(buttons[0]);
	}
};
