import { Container } from '@/components/ui';
import Link from 'next/link';

export const metadata = {
	title: 'About',
	alternates: {
		canonical: '/about',
	},
};

export default function AboutPage() {
	return (
		<main className='flex-1'>
			<Container>
				<div className='relative mx-auto max-w-2xl pt-36'>
					<div className='mx-auto text-center lg:w-2/3'>
						<h1 className='text-5xl font-bold text-black dark:text-white md:text-6xl xl:text-7xl'>About PosiJar</h1>
					</div>
					<div className='mt-8 text-gray-900 dark:text-gray-100'>
						<p className='mb-4 text-lg'>
							Welcome to <span className='font-bold text-primary'>PosiJar</span>, where we believe in the power of
							positivity and the joy of celebrating life&apos;s little moments.
						</p>
						<p className='mb-4'>
							PosiJar was founded by{' '}
							<Link
								aria-label='Paolo Bianchessi GitHub Profile'
								className='font-bold hover:text-primary'
								href='https://github.com/paolo-05'
								target='_blank'
							>
								Paolo Bianchessi
							</Link>{' '}
							with the mission to provide individuals with a digital space to capture and cherish positive moments each
							day. We understand the importance of mindfulness and gratitude in fostering a happier and more fulfilling
							life.
						</p>
						<p className='mb-4'>
							In a world that can sometimes feel overwhelming, PosiJar serves as your personal sanctuary to document
							achievements, express gratitude, and reflect on the positive aspects of your journey.
						</p>
						<p className='mb-4'>
							Our platform encourages you to create a digital jar of happiness by jotting down simple joys, milestones,
							or moments of gratitude. Whether it&apos;s a small win, a beautiful sunset, or a heartfelt quote, every
							positive note contributes to building a collection of memories that can bring a smile to your face.
						</p>
						<h2 className='mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300'>
							Join us in spreading positivity and making a conscious effort to appreciate the beauty that surrounds us
							every day. Start your journey with PosiJar today!
						</h2>
					</div>
				</div>
			</Container>
		</main>
	);
}
