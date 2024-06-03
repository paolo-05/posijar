import { auth } from '@/auth';
import { Jar } from '@/components/jar/jarSvg';
import { BlurredBackground } from '@/components/theme';
import { Container } from '@/components/ui';
import { getFactsCount } from '@/lib/data';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FC } from 'react';
import { Button } from '../ui/button';

export const MyJar: FC = async () => {
	const session = await auth();

	if (!session) {
		redirect('/auth/signin');
	}

	const count = await getFactsCount(parseInt(session.user?.id || ''));

	return (
		<div className='relative py-16'>
			<BlurredBackground />
			<Container>
				<div className='relative'>
					<div className='flex flex-col items-center justify-center -space-x-2 lg:flex-row'>
						<div className='flex-shrink-0 p-4 lg:w-1/2'>
							<Jar offset={1 - count / 365} />
						</div>

						<div className='flex-grow p-4 lg:w-1/2'>
							<h1 className='mb-4 text-start text-4xl font-bold text-gray-800 dark:text-white md:text-5xl'>
								Your PosiJar Stats
							</h1>
							<p className='mb-4 text-lg text-gray-600 dark:text-gray-300'>
								Fill up your jar by adding positive moments each day. Every contribution adds to your journey of joy and
								gratitude.
							</p>
							<div className='text-md mb-4 text-gray-900 dark:text-gray-100'>
								<p>Total Facts: {count}</p>
							</div>
							<Button asChild>
								<Link href='/dashboard'>Add a PosiFact</Link>
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
