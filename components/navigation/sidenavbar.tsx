'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DASHBOARD_LINKS } from '@/lib/contants';

import { LogoIcon } from '../svg';

export const SideNavbar = () => {
	const pathname = usePathname();

	return (
		<div className='hidden bg-muted/40 lg:block'>
			<div className='flex h-full max-h-screen flex-col gap-2'>
				<div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
					<Link href='/' className='flex items-center gap-2 text-2xl font-semibold'>
						<LogoIcon className='w-10' />
						PosiJar
					</Link>
				</div>
				<div className='flex-1'>
					<nav className='grid items-start px-2 text-lg font-medium lg:px-4'>
						{DASHBOARD_LINKS.map((link) => (
							<Link
								href={link.href}
								key={link.label}
								className={clsx(
									'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary',
									pathname == link.href ? 'text-primary' : 'text-muted-foreground',
								)}
							>
								{link.icon}
								{link.label}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};
