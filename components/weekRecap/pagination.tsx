'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { FC } from 'react';

export const Pagination: FC = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const date = searchParams.get('date') ? new Date(searchParams.get('date') as string) : new Date();

	const createPageURL = (date: Date) => {
		const params = new URLSearchParams(searchParams);
		params.set('date', date.toISOString().split('T')[0]);
		return `${pathname}?${params.toString()}`;
	};

	return (
		<div className='flex flex-row gap-4'>
			<Button>
				<Link href={createPageURL(new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000))}>Previous Week</Link>
			</Button>
			<Button disabled={date.getDate() == new Date().getDate()}>
				<Link href={createPageURL(new Date())}>Current Week</Link>
			</Button>
			<Button disabled={new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000) >= new Date()}>
				<Link href={createPageURL(new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000))}>Next Week</Link>
			</Button>
		</div>
	);
};
