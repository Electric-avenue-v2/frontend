import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '~/shared/ui/button';
import { Input } from '~/shared/ui/input';
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from './Field';

const meta: Meta<typeof Field> = {
	title: 'UI/Field',
	component: Field,
};

export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = {
	render: args => (
		<Field {...args}>
			<FieldLabel>Username</FieldLabel>
			<FieldContent>
				<Input placeholder="Enter your username" />
			</FieldContent>
			<FieldDescription>This is a description for the username field.</FieldDescription>
		</Field>
	)
};

export const WithError: Story = {
	render: args => (
		<Field {...args} data-invalid>
			<FieldLabel>Email</FieldLabel>
			<FieldContent>
				<Input placeholder="Enter your email" aria-invalid />
			</FieldContent>
			<FieldError errors={[{ message: 'Email is required' }, { message: 'Email is invalid' }]} />
		</Field>
	)
};

export const GroupedFields: Story = {
	render: () => (
		<FieldSet>
			<FieldLegend>Profile</FieldLegend>
			<FieldGroup>
				<Field>
					<FieldLabel>First Name</FieldLabel>
					<FieldContent>
						<Input placeholder="First Name" />
					</FieldContent>
				</Field>
				<Field>
					<FieldLabel>Last Name</FieldLabel>
					<FieldContent>
						<Input placeholder="Last Name" />
					</FieldContent>
				</Field>
			</FieldGroup>
		</FieldSet>
	)
};

export const WithSeparator: Story = {
	render: () => (
		<div>
			<Field>
				<FieldLabel>Password</FieldLabel>
				<FieldContent>
					<Input type="password" placeholder="Password" />
				</FieldContent>
			</Field>

			<FieldSeparator>OR</FieldSeparator>

			<Field>
				<FieldLabel>Social Login</FieldLabel>
				<FieldContent>
					<Button>Login with Google</Button>
				</FieldContent>
			</Field>
		</div>
	)
};
