import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Card as CardComp } from '~/shared/ui/card';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
	title: 'UI/Skeleton',
	component: Skeleton,
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
	render: () => <Skeleton style={{ width: 200, height: 20 }} />
};

export const Text: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
			<Skeleton style={{ width: '100%', height: 16 }} />
			<Skeleton style={{ width: '80%', height: 16 }} />
			<Skeleton style={{ width: '60%', height: 16 }} />
		</div>
	)
};

export const AvatarWithText: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
			<Skeleton style={{ width: 40, height: 40, borderRadius: '50%' }} />
			<div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
				<Skeleton style={{ width: 120, height: 14 }} />
				<Skeleton style={{ width: 80, height: 14 }} />
			</div>
		</div>
	)
};

export const Card: Story = {
	render: () => (
		<CardComp style={{padding: '15px', maxWidth: '300px'}}>
			<Skeleton style={{ width: '100%', height: 160 }} />
			<Skeleton style={{ width: '70%', height: 16 }} />
			<Skeleton style={{ width: '90%', height: 16 }} />
		</CardComp>
	)
};
