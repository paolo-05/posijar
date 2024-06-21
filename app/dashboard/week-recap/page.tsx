import { DaysGrid, Pagination, WeekRecapSkeleton } from '@/components/weekRecap';
import { formatDateToLocal } from '@/lib/utils';
import { endOfWeek, startOfWeek } from 'date-fns';
import { Suspense } from 'react';

export default async function Page({
	searchParams,
}: {
	searchParams?: {
		date?: string;
	};
}) {
	const date = searchParams?.date ? new Date(searchParams.date) : new Date();
	const startOfWeekDate = startOfWeek(date, { weekStartsOn: 1 }); // Assuming week starts on Monday (1)
	const endOfWeekDate = endOfWeek(date, { weekStartsOn: 1 }); // Assuming week starts on Monday (1)

	return (
		<main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
			<div className='flex flex-1 items-center justify-center rounded-lg shadow-sm'>
				<div className='relative flex flex-col items-center'>
					<div className='mb-10 text-center'>
						<h1 className='my-1 text-4xl font-bold text-gray-800 dark:text-gray-100 md:text-5xl'>Your Week Recap</h1>
						<p className='text-sm text-muted-foreground'>
							From {formatDateToLocal(startOfWeekDate.toDateString())} to{' '}
							{formatDateToLocal(endOfWeekDate.toDateString())}
						</p>
					</div>

					<Suspense fallback={<WeekRecapSkeleton />}>
						<DaysGrid startOfWeekDate={startOfWeekDate} endOfWeekDate={endOfWeekDate} />
					</Suspense>

					<Pagination />
				</div>
			</div>
		</main>
	);
}
