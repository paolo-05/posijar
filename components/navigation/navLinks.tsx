'use client';

import clsx from 'clsx';
import { Session } from 'next-auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface NavLinksProps {
  session: Session | null;
}

export const NavLinks: FC<NavLinksProps> = ({ session }) => {
  const pathname = usePathname();
  const links = [
    {
      href: session?.user ? '/fact' : '/auth/signin',
      label: "Today's Positive Fact",
    },
    { href: session?.user ? '/my-jar' : '/auth/signin', label: 'My PosiJar' },
    {
      href: 'https://www.buymeacoffee.com/paolobianchessi',
      label: 'Support Us',
    },
  ];

  return links.map(({ href, label }, index) => (
    <li key={label}>
      <Link
        href={href}
        className={clsx('block transition hover:text-primary md:px-4', {
          'text-brandSecondary': pathname === href && session?.user,
        })}
        target={index === links.length - 1 ? '_blank' : '_self'}
      >
        <span>{label}</span>
      </Link>
    </li>
  ));
};
