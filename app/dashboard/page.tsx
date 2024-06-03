import { auth } from '@/auth';
import { FactSkeleton, ViewFact } from '@/components/fact';
import { LogoIcon } from '@/components/svg/logoIcon';
import { BlurredBackground } from '@/components/theme';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: "Today's PosiFact",
	alternates: {
		canonical: '/dashboard',
	},
};

export default async function Page() {
	const session = await auth();

	if (!session?.user) {
		redirect('/auth/signin');
	}

	return (
		<main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
			<div className='flex flex-1 items-center justify-center rounded-lg shadow-sm'>
				<BlurredBackground />
				<div className='relative flex flex-col items-center'>
					<LogoIcon className='w-32' />
					<Suspense fallback={<FactSkeleton />}>
						<ViewFact />
					</Suspense>
				</div>
			</div>
		</main>
	);
}
