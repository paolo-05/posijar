import { BlurredBackground } from '@/components/theme';
import { Container } from '@/components/ui';
import Image from 'next/image';

export default function FactLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className='relative lg:space-y-40 lg:py-16'>
			<BlurredBackground />
			<Container>
				<div className='relative flex flex-col items-center'>
					<Image src={'/logo.svg'} alt='logo' width={512} height={512} className='w-32' />
					<div className='m-auto mt-6 space-y-6 md:w-8/12 lg:w-7/12'>{children}</div>
				</div>
			</Container>
		</main>
	);
}
