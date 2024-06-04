import { BlurredBackground } from '@/components/theme';
import { ProfileCard, ProfileSkeleton } from '@/components/user';
import { Suspense } from 'react';

export const metadata = {
	title: 'Your Profile',
	alternates: {
		canonical: '/dashboard/user/profile',
	},
};

export default function ProfilePage() {
	return (
		<main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
			<div className='flex flex-1 items-center justify-center rounded-lg shadow-sm'>
				<BlurredBackground />
				<div className='relative flex flex-col items-center'>
					<Suspense fallback={<ProfileSkeleton />}>
						<ProfileCard />
					</Suspense>
				</div>
			</div>
		</main>
	);
}
