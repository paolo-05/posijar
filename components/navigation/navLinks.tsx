import Link from 'next/link';
import { FC } from 'react';

export const NavLinks: FC = () => {
	const links = [
		{
			href: '/auth/signin',
			label: "Today's Positive Fact",
		},
		{ href: '/auth/signin', label: 'My PosiJar' },
		{
			href: 'https://www.buymeacoffee.com/paolobianchessi',
			label: 'Support Us',
		},
	];

	return links.map(({ href, label }, index) => (
		<li key={label}>
			<Link
				aria-label={label}
				href={href}
				className='block transition hover:text-primary md:px-4'
				target={index === links.length - 1 ? '_blank' : '_self'}
			>
				<span>{label}</span>
			</Link>
		</li>
	));
};
