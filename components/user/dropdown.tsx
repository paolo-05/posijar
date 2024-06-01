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
import { deleteUser } from '@/lib/actions';
import { FC } from 'react';

interface DeleteUserModalProps {
	userId: number;
}

export const DeleteUserModal: FC<DeleteUserModalProps> = ({ userId }) => {
	const deleteUserWithId = deleteUser.bind(null, userId);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='destructive'>Delete my account</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your account and remove your data from our
						servers.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<form action={deleteUserWithId}>
						<Button type='submit' variant='destructive'>
							Confirm
						</Button>
					</form>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
