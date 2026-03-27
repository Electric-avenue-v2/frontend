import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Typography } from './Typography';

const meta = {
	title: 'UI/Typography',
	component: Typography,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: [
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
				'h6',
				'lead',
				'body',
				'body-sm',
				'caption',
				'label',
				'overline',
				'code',
				'mono'
			]
		},
		color: {
			control: 'select',
			options: [
				'default',
				'muted',
				'subtle',
				'inverted',
				'accent',
				'destructive',
				'success',
				'warning'
			]
		},
		align: {
			control: 'radio',
			options: ['left', 'center', 'right', 'justify']
		},
		weight: {
			control: 'select',
			options: ['thin', 'light', 'regular', 'medium', 'semibold', 'bold', 'extrabold', 'black']
		},
		tracking: {
			control: 'select',
			options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest']
		},
		leading: {
			control: 'select',
			options: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose']
		},
		as: {
			control: 'text',
			description: 'HTML тег або React компонент (наприклад: span, div, h1)'
		},
		truncate: { control: 'boolean' },
		clamp: {
			control: 'radio',
			options: [1, 2, 3, 4, 5]
		}
	},
	args: {
		children: 'The quick brown fox jumps over the lazy dog',
		variant: 'body',
		color: 'default'
	}
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllVariants: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<Typography variant="h1">Heading 1</Typography>
			<Typography variant="h2">Heading 2</Typography>
			<Typography variant="h3">Heading 3</Typography>
			<Typography variant="h4">Heading 4</Typography>
			<Typography variant="h5">Heading 5</Typography>
			<Typography variant="h6">Heading 6</Typography>
			<Typography variant="lead">Lead paragraph text</Typography>
			<Typography variant="body">Body regular text</Typography>
			<Typography variant="body-sm">Body small text</Typography>
			<Typography variant="caption">Caption text</Typography>
			<Typography variant="label">Label text</Typography>
			<Typography variant="overline">Overline text</Typography>
			<Typography variant="code">const isAwesome = true;</Typography>
			<Typography variant="mono">Monospace text</Typography>
		</div>
	)
};

export const Colors: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '0.5rem',
				background: '#f5f5f5',
				padding: '1rem'
			}}
		>
			<Typography color="default">Default Color</Typography>
			<Typography color="muted">Muted Color</Typography>
			<Typography color="subtle">Subtle Color</Typography>
			<div style={{ background: '#000', padding: '0.5rem' }}>
				<Typography color="inverted">Inverted Color</Typography>
			</div>
			<Typography color="accent">Accent Color</Typography>
			<Typography color="destructive">Destructive Color</Typography>
			<Typography color="success">Success Color</Typography>
			<Typography color="warning">Warning Color</Typography>
		</div>
	)
};

export const Truncated: Story = {
	args: {
		truncate: true,
		children:
			'This is a very long text that should be truncated with an ellipsis because it exceeds the maximum width of its parent container.'
	},
	render: args => (
		<div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '8px' }}>
			<Typography {...args} />
		</div>
	)
};

export const LineClamp: Story = {
	args: {
		clamp: 3,
		children:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
	},
	render: args => (
		<div style={{ maxWidth: '400px', border: '1px solid #ccc', padding: '8px' }}>
			<Typography {...args} />
		</div>
	)
};
