import { FC } from 'react';

import Image from 'next/image';
import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { DeleteUserModal } from './';

export const ProfileCard: FC = async () => {
	const session = await auth();

	if (!session) {
		return redirect('/auth/signin');
	}

	return (
		<Card className='mx-auto -mt-32'>
			<CardHeader>
				<CardTitle className='text-2xl'>
					<Image
						src={session?.user?.image || 'https://cdn.discordapp.com/embed/avatars/0.png'}
						alt='User Avatar'
						className='mr-4 inline h-16 w-16 rounded-full'
						width={512}
						height={512}
					/>
					Your Profile
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='my-3 text-gray-600 dark:text-gray-200'>
					<span className='font-bold'>Username</span>: {session?.user?.name || ''}
				</div>
				<div className=' text-gray-600 dark:text-gray-200'>
					<span className='font-bold'>Email</span>: {session?.user?.email || ''}
				</div>
			</CardContent>
			<CardFooter>
				<DeleteUserModal userId={parseInt(session.user?.id || '')} />
			</CardFooter>
		</Card>
	);
};
