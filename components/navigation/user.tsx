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
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const User: FC = async () => {
	const session = await auth();

	if (!session) {
		return (
			<div className='mt-12 lg:mt-0'>
				<Button className='h-12 rounded-full bg-primary text-base font-semibold text-white hover:bg-primary/80'>
					<Link aria-label='Get Started' href={'/auth/signin'}>
						Get started
					</Link>
				</Button>
			</div>
		);
	} else {
		const user = session.user;
		return (
			<div className='mt-12 lg:mt-0'>
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button className='bg-primary text-sm font-semibold text-white hover:bg-primary/80'>
							<Image
								className='inline h-8 w-8 rounded-full object-cover'
								src={user?.image ?? 'https://cdn.discordapp.com/embed/avatars/0.png'}
								alt={'user avatar'}
								height={256}
								width={256}
							/>
							<span className='ml-2'>{user?.name}</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Link aria-label='User Profile Page' href={'/user/profile'}>
								Profile
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className='text-red-700'>
							<Link aria-label='Sign Out' href={'/auth/signout'}>
								Sign Out
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		);
	}
};
