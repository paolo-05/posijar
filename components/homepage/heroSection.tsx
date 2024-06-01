import { Container } from '@/components/ui';
import Link from 'next/link';
import { HeroAlert } from '.';
import { Button } from '@/components/ui/button';
import { auth } from '@/auth';

export const HeroSection: React.FC = async () => {
	const session = await auth();
	return (
		<div className='relative'>
			<div aria-hidden='true' className='absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'>
				<div className='h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700'></div>
				<div className='h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600'></div>
			</div>
			<Container>
				<div className='relative ml-auto pt-36'>
					<div className='mx-auto text-center lg:w-2/3'>
						<HeroAlert
							content='Get started now and write down your first positive fact.'
							href={session?.user ? '/fact/create' : '/auth/signin'}
						/>
						<h1 className='text-5xl font-bold text-gray-900 dark:text-white md:text-6xl xl:text-7xl'>
							This year, each day write down a <span className='text-primary dark:text-white'>positive</span> fact.
						</h1>
						<p className='mt-8 text-gray-700 dark:text-gray-300'>
							Now that you wrote it put it in a jar. At the end of the year you will break that jar and lots of good
							memories will eventualy come back.
						</p>
						<div className='mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4'>
							<Button className='h-14 rounded-full bg-primary text-base font-semibold text-white hover:bg-primary/80'>
								<Link aria-label='Get Started' href={session?.user ? '/fact' : '/auth/signin'}>
									Get started
								</Link>
							</Button>
							<Button
								variant='outline'
								className='h-14 rounded-full text-base font-semibold text-primary dark:text-white'
							>
								<Link aria-label='Learn More About PosiJar' href='#features'>
									Learn More
								</Link>
							</Button>
						</div>
						<div className='mt-16 hidden justify-between border-y border-gray-100 py-8 dark:border-gray-800 sm:flex'>
							<div className='text-left'>
								<h6 className='text-lg font-semibold text-gray-700 dark:text-white'>The best experience</h6>
								<p className='mt-2 text-gray-500'>Write down your positive facts in your browser!</p>
							</div>
							<div className='text-left'>
								<h6 className='text-lg font-semibold text-gray-700 dark:text-white'>All the data is private</h6>
								<p className='mt-2 text-gray-500'>We won&apos;t share any data related to you.</p>
							</div>
							<div className='text-left'>
								<h6 className='text-lg font-semibold text-gray-700 dark:text-white'>We&apos;ll keep a jar for you.</h6>
								<p className='mt-2 text-gray-500'>At the end of the year we&apos;ll enjoy breaking it with you.</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
