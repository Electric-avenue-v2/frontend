import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
	title: 'UI/Accordion',
	component: Accordion,
	tags: ['autodocs'],
	args: {
		header: 'Accordion title',
		children: 'This is accordion content'
	}
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {};

export const OpenByDefault: Story = {
	args: {
		open: true
	}
};

export const MultipleAccordions: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
			<Accordion header="First">First content</Accordion>
			<Accordion header="Second">Second content</Accordion>
			<Accordion header="Third">Third content</Accordion>
		</div>
	)
};
