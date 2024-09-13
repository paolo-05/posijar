'use client';

import { FC } from 'react';

import Link from 'next/link';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { deleteFact } from '@/lib/actions';

interface FactDropdownProps {
	userId: number;
	factId: number;
}

export const FactDropdown: FC<FactDropdownProps> = ({ userId, factId }) => {
	const deleteFactWithId = deleteFact.bind(null, userId, factId);

	return (
		<AlertDialog>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<svg
						className='h-4 w-4 text-gray-500 dark:text-gray-400'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 4 15'
					>
						<path d='M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
					</svg>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='bg-background'>
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Link aria-label='Edit Fact' href={`/dashboard/fact/${factId}/edit`} className='h-full w-full'>
							Edit
						</Link>
					</DropdownMenuItem>
					<AlertDialogTrigger className='h-full w-full text-red-700'>
						<DropdownMenuItem>Delete</DropdownMenuItem>
					</AlertDialogTrigger>
				</DropdownMenuContent>
			</DropdownMenu>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>

					<form action={deleteFactWithId}>
						<AlertDialogAction type='submit'>Confirm</AlertDialogAction>
					</form>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
