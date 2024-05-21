import { Container } from '@/components/ui';
import Link from 'next/link';
import { FC, useState } from 'react';
import { GithubIcon, InstagramIcon, TwitterIcon } from '../svg';

export const Footer: FC = () => {
	const [year] = useState(new Date().getFullYear());

	return (
		<footer className='py-20 md:py-40'>
			<Container>
				<div className='m-auto md:w-10/12 lg:w-8/12 xl:w-6/12'>
					<div className='flex flex-wrap items-center justify-between md:flex-nowrap'>
						<div className='flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300 sm:w-7/12 md:justify-start'>
							<ul className='list-inside list-disc space-y-8'>
								<li>
									<Link href='/' className='transition hover:text-primary'>
										Home
									</Link>
								</li>

								<li>
									<Link href='/about' className='transition hover:text-primary'>
										About
									</Link>
								</li>

								<li>
									<Link href='/tos' className='transition hover:text-primary'>
										Terms of Use
									</Link>
								</li>
							</ul>

							<ul role='list' className='space-y-8'>
								<li>
									<Link
										href='https://github.com/paolo-05/'
										className='flex items-center space-x-3 transition hover:text-primary'
										target='_blank'
									>
										<GithubIcon className='w-5' />
										<span>Github</span>
									</Link>
								</li>
								<li>
									<Link
										href='https://twitter.com/BianchessiPaolo'
										className='flex items-center space-x-3 transition hover:text-primary'
										target='_blank'
									>
										<TwitterIcon className='w-5' />
										<span>Twitter</span>
									</Link>
								</li>
								<li>
									<Link
										href='https://www.instagram.com/paolo.bianchessi/'
										className='flex items-center space-x-3 transition hover:text-primary'
										target='_blank'
									>
										<InstagramIcon className='w-5' />
										<span>Instagram</span>
									</Link>
								</li>
							</ul>
						</div>
						<div className='m-auto mt-16 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left'>
							<span className='block text-gray-500 dark:text-gray-400'>
								We spread positivy around the world &apos;cause why not?
							</span>

							<span className='block text-gray-500 dark:text-gray-400'>
								PosiJar &copy; <span>{year}</span>
							</span>

							<span className='flex justify-between text-gray-600 dark:text-white'>
								<Link href='/tos' className='font-medium'>
									Terms of Use
								</Link>
								<Link href='/privacy' className='font-medium'>
									Privacy Policy
								</Link>
							</span>

							<span className='block text-gray-500 dark:text-gray-400'>
								Need help?{' '}
								<Link href='mailto:paolo.bianchessi@icloud.com' className='font-semibold text-gray-600 dark:text-white'>
									{' '}
									Contact Us
								</Link>
							</span>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};
