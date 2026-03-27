import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut
} from './Command';

const meta: Meta<typeof Command> = {
	title: 'UI/Command',
	component: Command
};

export default meta;

type Story = StoryObj<typeof Command>;

const items = [
	{ label: 'Apple', value: 'apple' },
	{ label: 'Banana', value: 'banana' },
	{ label: 'Orange', value: 'orange' }
];

export const Default: Story = {
	render: () => (
		<div style={{ width: 300 }}>
			<Command>
				<CommandInput placeholder="Search..." />

				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>

					<CommandGroup heading="Fruits">
						{items.map(item => (
							<CommandItem key={item.value}>{item.label}</CommandItem>
						))}
					</CommandGroup>

					<CommandSeparator />

					<CommandGroup heading="Actions">
						<CommandItem>
							Create new
							<CommandShortcut>⌘N</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</Command>
		</div>
	)
};
