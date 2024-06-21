import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { FC } from 'react';

export const WeekRecapSkeleton: FC = () => {
	return (
		<div className='grid grid-cols-1 gap-3 py-14 lg:grid-cols-7'>
			{Array.from({ length: 7 }).map((_, index) => (
				<Card className='relative h-80 w-52' key={index}>
					<CardHeader>
						<CardTitle>
							<Skeleton className='h-[25px] w-11/12' />
						</CardTitle>
					</CardHeader>
					<CardContent>
						<Skeleton className='mb-3 h-[18px] w-11/12' />
						<Skeleton className='mb-3 h-[18px] w-9/12' />
						<Skeleton className='mb-3 h-[18px] w-11/12' />
						<Skeleton className='mb-3 h-[18px] w-9/12' />
						<Skeleton className='mb-3 h-[18px] w-11/12' />
						<Skeleton className='mb-3 h-[18px] w-9/12' />
						<Skeleton className='mb-3 h-[18px] w-11/12' />
					</CardContent>
				</Card>
			))}
		</div>
	);
};
