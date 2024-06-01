import { JarSkeleton, MyJar } from '@/components/jar';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'MyPosiJar',
	alternates: {
		canonical: '/my-jar',
	},
};

export default function MyJarPage() {
	return (
		<main className='flex-1'>
			<Suspense fallback={<JarSkeleton />}>
				<MyJar />
			</Suspense>
		</main>
	);
}
