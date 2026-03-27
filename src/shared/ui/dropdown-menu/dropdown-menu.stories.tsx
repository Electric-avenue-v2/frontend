import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './DropdownMenu';

const meta: Meta = {
	title: 'UI/DropdownMenu',
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger>Open</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Settings</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
};

export const Checkbox: Story = {
	render: () => {
		const [checkedItems, setCheckedItems] = React.useState<string[]>([]);

		const handleCheckedChange = (item: string, checked: boolean) => {
			setCheckedItems(prev => (checked ? [...prev, item] : prev.filter(i => i !== item)));
		};

		return (
			<DropdownMenu>
				<DropdownMenuTrigger>Options</DropdownMenuTrigger>

				<DropdownMenuContent align="start">
					<DropdownMenuCheckboxItem
						checked={checkedItems.includes('First feature')}
						onCheckedChange={checked => handleCheckedChange('First feature', Boolean(checked))}
					>
						First feature
					</DropdownMenuCheckboxItem>

					<DropdownMenuCheckboxItem
						checked={checkedItems.includes('Enable feature')}
						onCheckedChange={checked => handleCheckedChange('Enable feature', Boolean(checked))}
					>
						Enable feature dsadas
					</DropdownMenuCheckboxItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}
};

export const Radio: Story = {
	render: () => {
		const [value, setValue] = React.useState('1');

		return (
			<DropdownMenu>
				<DropdownMenuTrigger>Theme</DropdownMenuTrigger>

				<DropdownMenuContent>
					<DropdownMenuRadioGroup value={value} onValueChange={setValue}>
						<DropdownMenuRadioItem value="1">Light</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="2">Dark</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}
};

export const Submenu: Story = {
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger>More</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuItem>Profile</DropdownMenuItem>

				<DropdownMenuSub>
					<DropdownMenuSubTrigger>Settings</DropdownMenuSubTrigger>
					<DropdownMenuSubContent>
						<DropdownMenuItem>General</DropdownMenuItem>
						<DropdownMenuItem>Security</DropdownMenuItem>
					</DropdownMenuSubContent>
				</DropdownMenuSub>
			</DropdownMenuContent>
		</DropdownMenu>
	)
};
