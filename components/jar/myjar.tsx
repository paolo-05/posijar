import { Jar } from '@/components/jar/jarSvg';
import { Container } from '@/components/ui';
import Link from 'next/link';
import { FC } from 'react';

interface MyPosiJarProps {
	count: number;
}

export const MyJar: FC<MyPosiJarProps> = ({ count }) => {
	return (
		<Container>
			<div className='flex flex-col lg:flex-row justify-center items-center pt-40'>
				<div className='flex-shrink-0 p-4 lg:w-1/2'>
					<Jar offset={1 - count / 365} />
				</div>

				<div className='flex-grow p-4 lg:w-1/2'>
					<h1 className='text-start text-4xl font-bold text-gray-800 dark:text-white md:text-5xl mb-4'>
						Your PosiJar Stats
					</h1>
					<p className='text-lg text-gray-600 dark:text-gray-300 mb-4'>
						Fill up your jar by adding positive moments each day. Every contribution adds to your journey of joy and
						gratitude.
					</p>
					<div className='mb-4 text-md text-gray-900 dark:text-gray-100'>
						<p>Total Facts: {count}</p>
					</div>
					<Link
						href='/positive-today'
						className='relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-info before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
					>
						<span className='relative text-base font-semibold text-white'>Add a PosiFact</span>
					</Link>
				</div>
			</div>
		</Container>
	);
};
