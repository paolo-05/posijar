import Header from '@/components/navigation/header';
import Container from '@/components/ui/container';
import { useSession } from 'next-auth/react';
import { Urbanist } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

const urbanist = Urbanist({ subsets: ['latin'] });

export default function Custom404() {
	const { data: session } = useSession();
	return (
		<>
			<Head>
				<title>Not found | PosiJar</title>
			</Head>
			<main className={urbanist.className}>
				<Header session={session} />
				<div className='relative py-16 space-y-40'>
					<div
						aria-hidden='true'
						className='absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'
					>
						<div className='blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700'></div>
						<div className='blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600'></div>
					</div>
					<Container>
						<div className='relative'>
							<div className='mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12'>
								<h1 className='text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl'>
									Error 404. Not found.
								</h1>
								<p className='text-center text-xl text-gray-600 dark:text-gray-300'>
									Sorry, we couldn&apos;t find the page you&apos;re looking for.
								</p>
								<div className='flex flex-wrap justify-center gap-6'>
									<Link
										href='/'
										className='relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
									>
										<span className='relative text-base font-semibold text-white dark:text-dark'>Back home</span>
									</Link>
									<Link
										href='mailto:paolo.bianchessi@icloud.com'
										className='relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max'
									>
										<span className='relative text-base font-semibold text-primary dark:text-white'>
											Contact support
										</span>
									</Link>
								</div>
							</div>
						</div>
					</Container>
				</div>
			</main>
		</>
	);
}
