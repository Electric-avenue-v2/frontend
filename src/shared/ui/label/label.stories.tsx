import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
	title: 'UI/Label',
	component: Label,
	parameters: {
		layout: 'centered'
	},
	args: {
		children: 'Email address'
	}
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithInput: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
			<Label htmlFor="email">Email</Label>
			<input id="email" placeholder="Enter email" />
		</div>
	)
};

export const Required: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
			<Label htmlFor="email">
				Email <span style={{ color: 'red' }}>*</span>
			</Label>
			<input id="email" />
		</div>
	)
};

export const Disabled: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
			<Label htmlFor="email" style={{ opacity: 0.5 }}>
				Email
			</Label>
			<input id="email" disabled />
		</div>
	)
};
