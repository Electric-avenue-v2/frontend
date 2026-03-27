import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import {
	Avatar,
	AvatarBadge,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount,
	AvatarImage,
	AvatarWrapper
} from './Avatar';

const meta: Meta<typeof Avatar> = {
	title: 'UI/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	argTypes: {
		size: { control: { type: 'select' }, options: ['sm', 'default', 'lg'] },
		children: { control: false }
	}
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
	render: args => (
		<AvatarWrapper>
			<Avatar {...args}>
				<AvatarImage src="https://i.pravatar.cc/150?img=3" alt="User" />
				<AvatarFallback size={args.size}>U</AvatarFallback>
			</Avatar>
			<AvatarBadge size={args.size} />
		</AvatarWrapper>
	),
	args: {
		size: 'default'
	}
};

export const Group: Story = {
	render: () => (
		<AvatarGroup>
			<Avatar size="sm">
				<AvatarImage src="https://i.pravatar.cc/150?img=1" alt="User1" />
				<AvatarFallback size="sm">A</AvatarFallback>
			</Avatar>
			<Avatar size="default">
				<AvatarImage src="https://i.pravatar.cc/150?img=2" alt="User2" />
				<AvatarFallback size="default">B</AvatarFallback>
			</Avatar>
			<Avatar size="lg">
				<AvatarImage src="https://i.pravatar.cc/150?img=3" alt="User3" />
				<AvatarFallback size="lg">C</AvatarFallback>
			</Avatar>
			<AvatarGroupCount>+3</AvatarGroupCount>
		</AvatarGroup>
	)
};
