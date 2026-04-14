import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription
} from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'UI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <button>Open Popover</button>
      </PopoverTrigger>

      <PopoverContent>
        <div>Simple content</div>
      </PopoverContent>
    </Popover>
  )
};

export const WithHeader: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <button>Open</button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Profile</PopoverTitle>
          <PopoverDescription>
            Manage your account settings
          </PopoverDescription>
        </PopoverHeader>

        <div>Some content here...</div>
      </PopoverContent>
    </Popover>
  )
};

export const DropdownStyle: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <input placeholder="Search..." />
      </PopoverTrigger>

      <PopoverContent style={{ width: 300 }}>
        <div>Result 1</div>
        <div>Result 2</div>
        <div>Result 3</div>
      </PopoverContent>
    </Popover>
  )
};
