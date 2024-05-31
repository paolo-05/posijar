import { CallToAction, Features, HeroSection } from '@/components/homepage';

export const metadata = {
  title: 'Homepage | PosiJar',
};

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <Features />
      <CallToAction />
    </main>
  );
}
