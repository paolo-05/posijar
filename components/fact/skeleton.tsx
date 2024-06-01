import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const FactSkeleton = () => (
	<Card className='mx-auto sm:max-w-sm lg:w-full'>
		<CardHeader>
			<CardTitle>
				<Skeleton className='h-[24px] max-w-[200px]' />
			</CardTitle>
		</CardHeader>
		<CardContent>
			<Skeleton className='h-[48px] w-full' />
		</CardContent>
		<CardFooter>
			<div className='flex items-center justify-center gap-4'>
				<Skeleton className='h-[48px] w-[200px]' />
				<Skeleton className='h-[20px] w-[20px]' />
				<Skeleton className='h-[40px] w-[120px]' />
			</div>
		</CardFooter>
	</Card>
);
