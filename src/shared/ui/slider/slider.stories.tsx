import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import type { ComponentProps } from 'react';
import { Slider } from './Slider';

type SliderProps = ComponentProps<typeof Slider>;

const meta: Meta<typeof Slider> = {
	title: 'UI/Slider',
	component: Slider,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		min: { control: 'number' },
		max: { control: 'number' },
		step: { control: 'number' },
		disabled: { control: 'boolean' },
	},
};

export default meta;

type Story = StoryObj<typeof Slider>;

const ControlledSlider = (args: SliderProps) => {
	const [value, setValue] = useState<number[]>(
		args.defaultValue ?? [20, 80]
	);

	return (
		<div style={{ width: 300 }}>
			<Slider
				{...args}
				value={value}
				onValueChange={setValue}
			/>
			<div style={{ marginTop: 12 }}>
				{value[0]} - {value[1] ?? ''}
			</div>
		</div>
	);
};

export const Default: Story = {
	render: (args) => <ControlledSlider {...args} />,
	args: {
		min: 0,
		max: 100,
		defaultValue: [20, 80],
		step: 1,
	},
};

export const SingleValue: Story = {
	render: (args) => <ControlledSlider {...args} />,
	args: {
		min: 0,
		max: 100,
		defaultValue: [50],
		step: 1,
	},
};

export const Range: Story = {
	render: (args) => <ControlledSlider {...args} />,
	args: {
		min: 0,
		max: 1000,
		defaultValue: [200, 700],
		step: 10,
	},
};

export const Disabled: Story = {
	render: (args) => <ControlledSlider {...args} />,
	args: {
		min: 0,
		max: 100,
		defaultValue: [30, 70],
		disabled: true,
	},
};