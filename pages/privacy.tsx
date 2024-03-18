import Header from '@/components/navigation/header';
import Container from '@/components/ui/container';
import { useSession } from 'next-auth/react';
import { Urbanist } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

const urbanist = Urbanist({ subsets: ['latin'] });

export default function Privacy() {
	const { data: session } = useSession();

	return (
		<>
			<Head>
				<title>Terms of Use | PosiJar</title>
			</Head>
			<main className={urbanist.className}>
				<Header session={session} />
				<section className='space-y-40 mb-40'>
					<Container>
						<div className='relative pt-36 max-w-2xl mx-auto'>
							<div className='lg:w-2/3 text-center mx-auto'>
								<h1 className='text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl'>
									Privacy Policy
								</h1>
							</div>
							<div className='mt-8 text-gray-700 dark:text-gray-300'>
								<p className='mt-2 text-gray-500'>
									This Privacy Policy describes how your personal information is collected, used, and shared when you
									use PosiJar.
								</p>
								<br />
								<p className='text-primary dark:text-white font-bold'>Information We Collect:</p>
								<ul className='list-disc'>
									<li>
										When you sign up for PosiJar, we collect information such as your username, email, and Discord ID.
									</li>
									<li>When you use the service, we collect information about the positive things you submit.</li>
								</ul>
								<br />
								<p className='text-primary dark:text-white font-bold'>How We Use Your Information:</p>
								<ul className='list-disc'>
									<li>We use your information to provide and improve the service.</li>
									<li>Your data is not shared with third parties, except as required by law.</li>
								</ul>
								<br />
								<p className='text-primary dark:text-white font-bold'>Security:</p>
								<ul className='list-disc'>
									<li>We take reasonable measures to protect your personal information.</li>
								</ul>
								<br />
								<p className='text-primary dark:text-white font-bold'>Your Choices:</p>
								<ul className='list-disc'>
									<li>You can access and update your personal information in your account settings.</li>
									<li>You can delete your account at any time.</li>
								</ul>{' '}
								<br />
								<p className='text-primary dark:text-white font-bold'>Children&apos;s Privacy:</p>
								<ul className='list-disc'>
									<li>PosiJar is not intended for individuals under the age of 13.</li>
								</ul>
								<br />
								<p className='text-primary dark:text-white font-bold'>Changes:</p>
								<ul className='list-disc'>
									<li>We may update this Privacy Policy from time to time.</li>
								</ul>
								<br />
								<p className='text-primary dark:text-white font-bold'>Contact Us:</p>
								<ul className='list-disc'>
									<li>
										For questions about this Privacy Policy, please{' '}
										<Link href='mailto:paolo.bianchessi@icloud.com' className='transition hover:text-primary'>
											contact us
										</Link>
										.
									</li>
								</ul>
								<br />
								<h3 className='text-xl font-semibold text-gray-700 dark:text-white'>
									Thank you for trusting PosiJar with your positivity!
								</h3>
							</div>
						</div>
					</Container>
				</section>
			</main>
		</>
	);
}
