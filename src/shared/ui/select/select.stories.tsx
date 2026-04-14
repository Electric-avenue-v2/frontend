import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue
} from './Select';

const meta: Meta<typeof Select> = {
	title: 'UI/Select',
	component: Select,
	parameters: {
		layout: 'centered'
	}
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
	render: args => (
		<Select {...args}>
			<SelectTrigger style={{ width: '180px' }}>
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent position="popper">
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="blueberry">Blueberry</SelectItem>
				<SelectItem value="grapes">Grapes</SelectItem>
				<SelectItem value="pineapple">Pineapple</SelectItem>
			</SelectContent>
		</Select>
	)
};

export const Small: Story = {
	render: args => (
		<Select {...args}>
			<SelectTrigger size="sm" style={{ width: '180px' }}>
				<SelectValue placeholder="Compact version" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="light">Light</SelectItem>
				<SelectItem value="dark">Dark</SelectItem>
				<SelectItem value="system">System</SelectItem>
			</SelectContent>
		</Select>
	)
};

export const Disabled: Story = {
	render: args => (
		<Select {...args} disabled>
			<SelectTrigger style={{ width: '180px' }}>
				<SelectValue placeholder="Not available for selection" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="1">One</SelectItem>
				<SelectItem value="2">Two</SelectItem>
			</SelectContent>
		</Select>
	)
};

export const WithGroups: Story = {
	render: args => (
		<Select {...args}>
			<SelectTrigger style={{ width: '280px' }}>
				<SelectValue placeholder="Select a time zone" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>North America</SelectLabel>
					<SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
					<SelectItem value="cst">Central Standard Time (CST)</SelectItem>
					<SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
					<SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
				</SelectGroup>

				<SelectSeparator />

				<SelectGroup>
					<SelectLabel>Europe</SelectLabel>
					<SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
					<SelectItem value="cet">Central European Time (CET)</SelectItem>
					<SelectItem value="eet">Eastern European Time (EET)</SelectItem>
				</SelectGroup>

				<SelectSeparator />

				<SelectGroup>
					<SelectLabel>Asia</SelectLabel>
					<SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
					<SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	)
};
