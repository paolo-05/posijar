import { BlurredBackground } from '@/components/theme';
import { Container } from '@/components/ui';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Not Found',
};

export default function NotFound() {
	return (
		<main className='flex min-h-screen items-center justify-center'>
			<BlurredBackground />
			<Container>
				<div className='relative'>
					<div className='m-auto mt-6 space-y-6 md:w-8/12 lg:w-7/12'>
						<h1 className='text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl'>
							Error 404. Not found.
						</h1>
						<p className='text-center text-xl text-gray-600 dark:text-gray-300'>
							Sorry, we couldn&apos;t find the page you&apos;re looking for.
						</p>
						<div className='flex flex-wrap justify-center gap-6'>
							<Button className='h-12 rounded-full bg-primary text-base font-semibold text-white hover:bg-primary/80'>
								<Link aria-label='Back to Homepage' href='/'>
									Back to Homepage
								</Link>
							</Button>
							<Button
								variant='outline'
								className='h-12 rounded-full text-base font-semibold text-primary dark:text-white'
							>
								<Link aria-label='Contact Support' href='mailto:paolo.bianchessi@icloud.com'>
									Contact Support
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</main>
	);
}
