import { LogoIcon } from '@/components/svg';
import { BlurredBackground } from '@/components/theme';
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';

export const CommingSoon = () => (
	<main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
		<div className='flex flex-1 items-center justify-center rounded-lg shadow-sm'>
			<BlurredBackground />
			<div className='relative flex flex-col items-center'>
				<LogoIcon className='w-32' />
				<div className='max-w-md'>
					<h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>Coming Soon!</h1>
					<p className='leading-7 [&:not(:first-child)]:mt-6'>
						We&apos;re working hard to bring you something amazing! Our team is putting the finishing touches on an
						exciting new experience that we can&apos;t wait to share with you
					</p>
					<div className='mt-4 flex flex-wrap justify-center gap-6'>
						<Button className='h-14 rounded-full bg-primary text-base font-semibold text-white hover:bg-primary/80'>
							<Link aria-label='Get Started' href='/dashboard'>
								Go to Dashboard
							</Link>
						</Button>
						<Button
							variant='outline'
							className='h-14 rounded-full text-base font-semibold text-primary dark:text-white'
						>
							<Link aria-label='Support Us' href='https://www.buymeacoffee.com/paolobianchessi' target='_blank'>
								Support Us
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	</main>
);
