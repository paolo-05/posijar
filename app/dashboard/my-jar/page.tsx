import { Suspense } from 'react';

import { Metadata } from 'next';

import { JarSkeleton, MyJar } from '@/components/jar';
import { BlurredBackground } from '@/components/theme';

export const metadata: Metadata = {
	title: 'MyPosiJar',
	alternates: {
		canonical: '/dashboard/my-jar',
	},
};

export default function MyJarPage() {
	return (
		<main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
			<div className='flex flex-1 items-center justify-center rounded-lg shadow-sm'>
				<BlurredBackground />
				<div className='relative flex flex-col items-center'>
					<Suspense fallback={<JarSkeleton />}>
						<MyJar />
					</Suspense>
				</div>
			</div>
		</main>
	);
}
