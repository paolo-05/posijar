'use client';

import clsx from 'clsx';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LogoIcon } from '@/components/svg';
import { ModeToggle } from '@/components/theme';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DASHBOARD_LINKS } from '@/lib/contants';

export const CollapsableHeader = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const pathname = usePathname();

	return (
		<header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant='outline' size='icon' className='shrink-0 lg:hidden'>
						<Menu className='h-5 w-5' />
						<span className='sr-only'>Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='left' className='flex flex-col'>
					<nav className='grid gap-2 text-lg font-medium'>
						<Link href='/' className='flex items-center gap-2 text-lg font-semibold'>
							<LogoIcon className='w-10' />
							<span className='sr-only'>PosiJar</span>
						</Link>
						{DASHBOARD_LINKS.map((link) => (
							<Link
								href={link.href}
								key={link.label}
								className={clsx(
									'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground',
									pathname == link.href ? 'text-primary' : 'text-muted-foreground',
								)}
							>
								{link.icon}
								{link.label}
							</Link>
						))}
					</nav>
				</SheetContent>
			</Sheet>
			<div className='w-full flex-1' />
			<ModeToggle />
			{children}
		</header>
	);
};
