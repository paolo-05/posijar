'use client';

import { NavLinks } from '@/components/navigation/';
import { LogoIcon } from '@/components/svg';
import { ModeToggle } from '@/components/theme';
import { Container } from '@/components/ui';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

export const Header: FC = () => {
	const pathname = usePathname();

	if (!pathname.startsWith('/dashboard'))
		return (
			<header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
				<Container>
					<div className='relative flex flex-wrap items-center justify-between gap-6 py-2 md:gap-0 md:py-4'>
						<input aria-hidden='true' type='checkbox' name='toggle_nav' id='toggle_nav' className='peer hidden' />
						<div className='relative z-20 flex w-full justify-between md:px-0 lg:w-max'>
							<Link href='/' aria-label='PosiJar Logo' className='flex items-center space-x-2'>
								<div aria-hidden='true' className='flex space-x-1'>
									<LogoIcon className='w-10' />
								</div>
								<span className='text-2xl font-bold text-gray-900 dark:text-white'>PosiJar 2024</span>
							</Link>
							<div className='flex justify-center gap-1'>
								<div className='lg:hidden'>
									<ModeToggle />
								</div>

								<div className='relative flex max-h-10 items-center lg:hidden'>
									<label htmlFor='toggle_nav' aria-label='humburger' id='hamburger' className='relative -mr-6 p-6'>
										<div
											aria-hidden='true'
											id='line'
											className='m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300'
										></div>
										<div
											aria-hidden='true'
											id='line2'
											className='m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300'
										></div>
									</label>
								</div>
							</div>
						</div>
						<div
							aria-hidden='true'
							className='fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-3xl transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 dark:bg-gray-900/70 lg:hidden'
						></div>
						<div className='dark:shadow-non invisible absolute left-0 top-full z-20 w-full origin-top translate-y-1 scale-95 flex-col flex-wrap justify-end gap-6 rounded-3xl border p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 peer-checked:visible peer-checked:scale-100 peer-checked:opacity-100 lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0'>
							<div className='w-full text-gray-600 dark:text-gray-300 lg:w-auto lg:pr-4 lg:pt-0'>
								<ul className='flex flex-col gap-6 font-medium tracking-wide lg:flex-row lg:items-center lg:gap-0 lg:text-sm'>
									<NavLinks />
								</ul>
							</div>
							<div className='mt-12 lg:mt-0'>
								<Button size='lg'>
									<Link aria-label='Get Started' href={'/auth/signin'}>
										Get started
									</Link>
								</Button>
							</div>
							<span className='hidden transition md:px-4 lg:block'>
								<ModeToggle />
							</span>
						</div>
					</div>
				</Container>
			</header>
		);
};
