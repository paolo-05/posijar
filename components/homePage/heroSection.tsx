import { Container } from '@/components/ui';
import Link from 'next/link';
import { HeroAlert } from '.';

export const HeroSection = () => {
	return (
		<div className='relative'>
			<div aria-hidden='true' className='absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'>
				<div className='blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700'></div>
				<div className='blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600'></div>
			</div>
			<Container>
				<div className='relative pt-36 ml-auto'>
					<div className='lg:w-2/3 text-center mx-auto'>
						<HeroAlert content='Restyle of the PosiToday page' />
						<h1 className='text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl'>
							This year, each day write down a <span className='text-primary dark:text-white'>positive</span> fact.
						</h1>
						<p className='mt-8 text-gray-700 dark:text-gray-300'>
							Now that you wrote it put it in a jar. At the end of the year you will break that jar and lots of good
							memories will eventualy come back.
						</p>
						<div className='mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6'>
							<Link
								href='/positive-today'
								className='relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
							>
								<span className='relative text-base font-semibold text-white'>Get started</span>
							</Link>
							<Link
								href='#features'
								className='relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max'
							>
								<span className='relative text-base font-semibold text-primary dark:text-white'>Learn more</span>
							</Link>
						</div>
						<div className='hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between'>
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
