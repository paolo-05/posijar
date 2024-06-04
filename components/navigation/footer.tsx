'use client';

import { YearCopiright } from '@/components/navigation/yearCopiright';
import { Container } from '@/components/ui';
import { FOOTER_LINKS_LEFT, FOOTER_LINKS_RIGHT } from '@/lib/contants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer = () => {
	const pathname = usePathname();
	if (!pathname.startsWith('/dashboard'))
		return (
			<footer className='py-20 md:py-40'>
				<Container>
					<div className='m-auto md:w-10/12 lg:w-8/12 xl:w-6/12'>
						<div className='flex flex-wrap items-center justify-between md:flex-nowrap'>
							<div className='flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300 sm:w-7/12 md:justify-start'>
								<ul className='list-inside list-disc space-y-8'>
									{FOOTER_LINKS_LEFT.map((link) => (
										<li key={link.label}>
											<Link aria-label={link.ariaLabel} href={link.href} className='transition hover:text-primary'>
												{link.label}
											</Link>
										</li>
									))}
								</ul>

								<ul role='list' className='space-y-8'>
									{FOOTER_LINKS_RIGHT.map((link) => (
										<li key={link.label}>
											<Link
												href={link.href}
												aria-label={link.ariaLabel}
												className='flex items-center space-x-3 transition hover:text-primary'
												target='_blank'
											>
												{link.icon}
												<span>{link.label}</span>
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className='m-auto mt-16 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left'>
								<span className='block text-gray-500 dark:text-gray-400'>
									We spread positivy around the world &apos;cause why not?
								</span>

								<YearCopiright />

								<span className='flex justify-between text-gray-600 dark:text-white'>
									<Link aria-label='Terms Of Use' href='/tos' className='font-medium hover:text-primary'>
										Terms of Use
									</Link>
									<Link aria-label='Privacy Policy' href='/privacy' className='font-medium hover:text-primary'>
										Privacy Policy
									</Link>
								</span>

								<span className='block text-gray-500 dark:text-gray-400'>
									Need help?{' '}
									<Link
										aria-label='Contact Support'
										href='mailto:paolo.bianchessi@icloud.com'
										className='font-semibold text-gray-600 hover:text-primary dark:text-white'
									>
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
