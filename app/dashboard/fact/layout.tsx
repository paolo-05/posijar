import { LogoIcon } from '@/components/svg';
import { BlurredBackground } from '@/components/theme';

export default function FactLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
			<div className='flex flex-1 items-center justify-center rounded-lg shadow-sm'>
				<BlurredBackground />
				<div className='relative flex flex-col items-center'>
					<LogoIcon className='w-32' />

					{children}
				</div>
			</div>
		</main>
	);
}
