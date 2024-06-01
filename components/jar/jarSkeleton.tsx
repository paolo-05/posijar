import { BlurredBackground } from '@/components/theme';
import { Container } from '@/components/ui';
import { Skeleton } from '@/components/ui/skeleton';

export const JarSkeleton = () => {
	return (
		<div className='relative py-16'>
			<BlurredBackground />
			<Container>
				<div className='relative'>
					<div className='flex flex-col items-center justify-center -space-x-2 lg:flex-row'>
						<div className='flex-shrink-0 p-4 lg:w-1/2'>
							<Skeleton className='h-[441px] w-[300px] rounded-full' />
						</div>

						<div className='flex-grow p-4 lg:w-1/2'>
							<Skeleton className='mb-3 h-[48px] w-[500px] rounded-full' />
							<Skeleton className='mb-3 h-[32px] w-[500px] rounded-full' />
							<Skeleton className='mb-3 h-[24px] w-[200px] rounded-full' />
							<Skeleton className='mb-3 h-[40px] w-[250px] rounded-lg' />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
