import Header from '@/components/navigation/header';
import Container from '@/components/ui/container';
import { signOut } from 'next-auth/react';
import { Urbanist } from 'next/font/google';
import Head from 'next/head';
import { useEffect } from 'react';

const urbanist = Urbanist({ subsets: ['latin'] });

export default function SignOut() {
	useEffect(() => {
		signOut({ callbackUrl: '/' });
	}, []);

	return (
		<>
			<Head>
				<title>All your PosiFacts | PosiJar</title>
			</Head>
			<main className={urbanist.className}>
				<Header session={null} />
				<div className='relative'>
					<div aria-hidden='true' className='absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'>
						<div className='blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700'></div>
						<div className='blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600'></div>
					</div>
					<Container>
						<div className='relative pt-36 ml-auto'>
							<div className='lg:w-2/3 text-center mx-auto'>
								<h1 className='text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl'>
									Logging you out...
								</h1>
							</div>
						</div>
					</Container>
				</div>
			</main>
		</>
	);
}
