import { ProfileCard, ProfileSkeleton } from '@/components/user';
import { Suspense } from 'react';

export const metadata = {
	title: 'Your Profile',
	alternates: {
		canonical: '/user/profile',
	},
};

export default async function ProfilePage() {
	return (
		<main className='flex h-screen items-center justify-center'>
			<div
				aria-hidden='true'
				className='absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'
			>
				<div className='h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700'></div>
				<div className='h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600'></div>
			</div>

			<div className='relative'>
				<Suspense fallback={<ProfileSkeleton />}>
					<ProfileCard />
				</Suspense>
			</div>
		</main>
	);
}
