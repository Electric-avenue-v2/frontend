import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
	title: 'UI/Checkbox',
	component: Checkbox,
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	render: () => <Checkbox  aria-label="terms-label" />
};

export const Checked: Story = {
	render: () => <Checkbox defaultChecked  aria-label="terms-label" />
};

export const Disabled: Story = {
	render: () => <Checkbox disabled  aria-label="terms-label" />
};

export const Invalid: Story = {
	render: () => <Checkbox aria-invalid="true"  aria-label="terms-label" />
};

export const WithLabel: Story = {
	render: () => (
		<label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
			<Checkbox />
			Accept terms
		</label>
	)
};
