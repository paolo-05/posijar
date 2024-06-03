import { Container } from '@/components/ui';
import Image from 'next/image';
import Link from 'next/link';

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
		title: 'Join now!',
		description:
			'Ready to turn your daily positivity into a year-end celebration? Join PosiJar now and begin your journey to a happier, more mindful you!',
		icon: 'https://cdn-icons-png.flaticon.com/64/6976/6976288.png',
	},
];

export const Features = () => {
	return (
		<div id='features'>
			<Container>
				<div className='relative'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='h-6 w-6 text-brandSecondary'
					>
						<path
							fillRule='evenodd'
							d='M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z'
							clipRule='evenodd'
						/>
					</svg>

					<h2 className='my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl'>
						PosiJar. A positive way to enter 2024!
					</h2>
					<p className='text-gray-600 dark:text-gray-300'>
						Store your daily moments of positivity and relive them at the end of the year.
					</p>
				</div>
				<div className='mt-16 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:divide-gray-700 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4'>
					{features.map((feature) => (
						<div
							key={feature.icon}
							className='group relative bg-card transition hover:z-[1] hover:text-brandSecondary hover:shadow-2xl'
						>
							<div className='grid grid-cols-1 gap-4 p-8 py-12'>
								<Image src={feature.icon} className='w-12' width={64} height={64} alt='burger illustration' />
								<h3 className='text-xl font-semibold text-gray-700 transition group-hover:text-brandSecondary dark:text-white'>
									{feature.title}
								</h3>
								<p className='text-gray-600 dark:text-gray-300'>{feature.description}</p>
								<Link
									aria-label='Get started'
									href='/auth/signin'
									className='flex items-center justify-between group-hover:text-brandSecondary'
								>
									<span className='text-sm'>Get started</span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'
									>
										<path
											fillRule='evenodd'
											d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
											clipRule='evenodd'
										/>
									</svg>
								</Link>
							</div>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};
