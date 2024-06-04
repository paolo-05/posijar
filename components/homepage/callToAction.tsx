import { UserImages } from '@/components/homepage/userImages';
import { BlurredBackground } from '@/components/theme';
import { Container } from '@/components/ui';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const CallToAction: React.FC = () => {
	return (
		<div className='relative py-16'>
			<BlurredBackground />
			<Container>
				<div className='relative'>
					<div className='flex items-center justify-center -space-x-2'>
						<UserImages />
					</div>
					<div className='m-auto mt-6 space-y-6 md:w-8/12 lg:w-7/12'>
						<h1 className='text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl'>
							Get Started now
						</h1>
						<p className='text-center text-xl text-gray-600 dark:text-gray-300'>
							Join other peoples that have already started this journey to a more positive year.
						</p>
						<div className='flex flex-wrap justify-center gap-6'>
							<Button size='lg'>
								<Link aria-label='Get Started' href='/auth/signin'>
									Get started
								</Link>
							</Button>
							<Button size='lg' variant='outline'>
								<Link aria-label='Learn More About PosiJar' href='/about'>
									More About
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
