import { CallToAction, Features, HeroSection } from '@/components/homepage';

export const metadata = {
	title: 'Homepage | PosiJar',
	alternates: {
		canonical: '/',
	},
};

export default function Page() {
	return (
		<main className='flex-1'>
			<HeroSection />
			<Features />
			<CallToAction />
		</main>
	);
}
