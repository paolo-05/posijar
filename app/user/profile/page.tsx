import { BlurredBackground } from '@/components/theme';
import { ProfileCard, ProfileSkeleton } from '@/components/user';
import { Suspense } from 'react';

export const metadata = {
	title: 'Your Profile',
	alternates: {
		canonical: '/user/profile',
	},
};

export default function ProfilePage() {
	return (
		<main className='flex h-screen items-center justify-center'>
			<BlurredBackground />

			<div className='relative'>
				<Suspense fallback={<ProfileSkeleton />}>
					<ProfileCard />
				</Suspense>
			</div>
		</main>
	);
}
