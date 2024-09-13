import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import { BlurredBackground } from '@/components/theme';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const metadata: Metadata = {
	title: 'Welcome to PosiJar',
	alternates: {
		canonical: '/auth/onboarding',
	},
};

const features = [
	{
		title: 'Your Personal Space',
		description:
			"PosiJar is your personal space to capture and cherish the positive moments in your life. Write down your happy thoughts, accomplishments, or things you're grateful for, and watch your positivity jar fill up over time.",
		icon: 'https://cdn-icons-png.flaticon.com/64/4341/4341139.png',
	},
	{
		title: 'No need to remember another passowrd',
		description:
			"With our Discord or Google authentication, it's easy to get started. Connect your account, and begin your journey to a more positive and mindful year.",
		icon: 'https://cdn-icons-png.flaticon.com/64/5969/5969527.png',
	},
	{
		title: "We'll wrap it out for you",
		description: "At the end of the year we'll make a wrap with all your best memories you told us about.",
		icon: 'https://cdn-icons-png.flaticon.com/64/4543/4543291.png',
	},
	{
		title: 'Welcome!',
		description: 'Ready to turn your daily positivity into a year-end celebration?',
		icon: 'https://cdn-icons-png.flaticon.com/64/6976/6976288.png',
	},
];

export default async function OnBoardingPage() {
	const session = await auth();

	if (!session?.user) {
		redirect('/auth/signin');
	}
	return (
		<main className='-mt-10 flex min-h-screen flex-col items-center justify-center'>
			<div className='flex flex-1 items-center justify-center'>
				<BlurredBackground />
				<div className='relative flex flex-col items-center'>
					<h1 className='mb-8 text-center text-4xl font-bold'>Welcome to PosiJar</h1>
					<Carousel className='w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl'>
						<CarouselContent className='-ml-2 md:-ml-4'>
							{features.map((feature) => (
								<CarouselItem key={feature.icon}>
									<Card className='border-none shadow-lg'>
										<CardContent className='flex h-[300px] flex-col items-center justify-center p-6 text-center'>
											<Image src={feature.icon} alt={feature.title} width={64} height={64} className='mb-4 h-12 w-12' />
											<h2 className='mb-2 text-2xl font-semibold'>{feature.title}</h2>

											<p>{feature.description}</p>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
					<div className='mt-8 space-x-4'>
						<Button variant='default'>
							<Link href='/dashboard/fact/create'>Get Started</Link>
						</Button>
						<Button variant='outline'>
							<Link href='/about'>Learn More</Link>
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
