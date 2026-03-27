import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
	title: 'UI/Input',
	component: Input,
	args: {
		placeholder: 'Enter text...'
	},
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithValue: Story = {
	args: {
		defaultValue: 'Hello world',
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'Disabled input',
	},
};

export const Invalid: Story = {
	args: {
		'aria-invalid': true,
		placeholder: 'Invalid input',
	},
};