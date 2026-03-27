import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from './Pagination';

const meta: Meta<typeof Pagination> = {
	title: 'UI/Pagination',
	component: Pagination,
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
	render: () => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="" />
				</PaginationItem>

				<PaginationItem>
					<PaginationLink href="">1</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationLink href="" isActive>
						2
					</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>

				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
};

export const ManyPages: Story = {
	render: () => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>

				{[1, 2, 3, 4, 5].map(page => (
					<PaginationItem key={page}>
						<PaginationLink href="#" isActive={page === 3}>
							{page}
						</PaginationLink>
					</PaginationItem>
				))}

				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
};
