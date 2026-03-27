import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from './Card';

const meta: Meta<typeof Card> = {
	title: 'UI/Card',
	component: Card,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['default', 'sm']
		}
	}
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
	render: args => (
		<Card {...args}>
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description goes here</CardDescription>
			</CardHeader>

			<CardContent>
				<p>This is card content</p>
			</CardContent>

			<CardFooter>
				<p>footer</p>
			</CardFooter>
		</Card>
	),
	args: {
		size: 'default'
	}
};

export const WithAction: Story = {
	render: () => (
		<Card>
			<CardHeader>
				<CardTitle>With Action</CardTitle>
				<CardDescription>Description</CardDescription>
				<CardAction>
					<button>...</button>
				</CardAction>
			</CardHeader>

			<CardContent>
				<p>Content with action</p>
			</CardContent>
		</Card>
	)
};

export const Small: Story = {
	render: () => (
		<Card size="sm">
			<CardHeader>
				<CardTitle>Small Card</CardTitle>
				<CardDescription>Compact version</CardDescription>
			</CardHeader>

			<CardContent>
				<p>Smaller spacing</p>
			</CardContent>

			<CardFooter>
				<button>OK</button>
			</CardFooter>
		</Card>
	)
};
