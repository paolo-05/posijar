'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { deleteFact } from '@/lib/actions';
import Link from 'next/link';
import { FC } from 'react';

interface FactDropdownProps {
	userId: number;
	factId: number;
}

export const FactDropdown: FC<FactDropdownProps> = ({ userId, factId }) => {
	const deleteFactWithId = deleteFact.bind(null, userId, factId);

	return (
		<Dialog>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Button variant='link'>
						<svg
							className='h-4 w-4 text-gray-500 dark:text-gray-400'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 4 15'
						>
							<path d='M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
						</svg>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='bg-background'>
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Link aria-label='Edit Fact' href={`/dashboard/fact/${factId}/edit`} className='h-full w-full'>
							Edit
						</Link>
					</DropdownMenuItem>
					<DialogTrigger className='h-full w-full text-red-700'>
						<DropdownMenuItem>Delete</DropdownMenuItem>
					</DialogTrigger>
				</DropdownMenuContent>
			</DropdownMenu>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>This action cannot be undone.</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<form action={deleteFactWithId}>
						<Button type='submit' variant='destructive'>
							Confirm
						</Button>
					</form>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
