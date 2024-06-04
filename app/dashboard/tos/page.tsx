import { Container } from '@/components/ui';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Terms of Use  ',
	alternates: {
		canonical: '/tos',
	},
};

export default function TosPage() {
	return (
		<main className='flex-1'>
			<Container>
				<div className='relative mx-auto max-w-2xl pt-36'>
					<div className='mx-auto text-center lg:w-2/3'>
						<h1 className='text-5xl font-bold text-gray-900 dark:text-white md:text-6xl xl:text-7xl'>Terms of Use</h1>
					</div>
					<div className='mt-8 text-gray-700 dark:text-gray-300'>
						<h2 className='text-xl font-semibold text-gray-700 dark:text-white'>Welcome to PosiJar!</h2>
						<p className='mt-2 italic text-gray-500 dark:text-gray-400'>
							By accessing this website, you agree to comply with and be bound by the following terms and conditions of
							use. If you disagree with any part of these terms, please do not use our website.
						</p>
						<br />
						<ol className='list-decimal'>
							<li>
								<span className='font-bold text-primary dark:text-white'>Use of the Service:</span> - You must be at
								least 13 years old to use this service. - You are responsible for maintaining the security of your
								account and password.
							</li>
							<li>
								<span className='font-bold text-primary dark:text-white'>User Content:</span> - Users are solely
								responsible for the content they submit. - PosiJar reserves the right to remove any content that
								violates these terms.
							</li>
							<li>
								<span className='font-bold text-primary dark:text-white'>Privacy:</span> - Your use of PosiJar is also
								governed by our Privacy Policy.{' '}
							</li>
							<li>
								<span className='font-bold text-primary dark:text-white'>Modifications:</span> - PosiJar reserves the
								right to modify or discontinue the service without notice.
							</li>
							<li>
								{' '}
								<span className='font-bold text-primary dark:text-white'>Disclaimer:</span> - PosiJar is provided
								&qout;as is&quot; without any warranties.{' '}
							</li>
							<li>
								<span className='font-bold text-primary dark:text-white'>Governing Law:</span> - These terms are
								governed by and construed in accordance with the laws of{' '}
								<Link
									aria-label='European Union Data Protection'
									href='https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en'
									className='transition hover:text-primary'
								>
									UE
								</Link>
							</li>
							<li>
								<span className='font-bold text-primary dark:text-white'>Contact:</span> - For questions about these
								terms, please{' '}
								<Link
									aria-label='Contact Support'
									href='mailto:paolo.bianchessi@icloud.com'
									className='underline transition hover:text-primary'
								>
									contact us
								</Link>
								.
							</li>
						</ol>
						<br />
						<h3 className='text-xl font-semibold text-gray-700 dark:text-white'>Thank you for using PosiJar!</h3>
					</div>
				</div>
			</Container>
		</main>
	);
}
