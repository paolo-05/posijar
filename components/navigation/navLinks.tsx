import { TOP_NAVBAR_LINKS } from '@/lib/contants';
import Link from 'next/link';
import { FC } from 'react';

export const NavLinks: FC = () => {
	return TOP_NAVBAR_LINKS.map((link, index) => (
		<li key={index}>
			<Link
				aria-label={link.label}
				href={link.href}
				className='block transition hover:text-primary md:px-4'
				target={index === TOP_NAVBAR_LINKS.length - 1 ? '_blank' : '_self'}
			>
				<span>{link.label}</span>
			</Link>
		</li>
	));
};
