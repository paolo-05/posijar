'use server';

import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FC } from 'react';

export const User: FC = async () => {
	const session = await auth();

	if (!session) {
		revalidatePath('/auth/signin');
		redirect('/auth/signin');
	}

	const user = session.user;
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='secondary' size='icon' className='rounded-full'>
					<Image
						className='inline h-6 w-6 rounded-full object-cover'
						src={user?.image ?? 'https://cdn.discordapp.com/embed/avatars/0.png'}
						alt={'user avatar'}
						height={256}
						width={256}
					/>
					<span className='sr-only'>Toggle user menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Link aria-label='User Profile Page' href='/dashboard/user/profile' className='h-full w-full'>
						Profile
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link aria-label='Contact Support' href='mailto:paolo.bianchessi@icloud.com'>
						Support
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className='text-red-700'>
					<Link aria-label='Sign Out' href={'/auth/signout'} className='h-full w-full'>
						Sign Out
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
