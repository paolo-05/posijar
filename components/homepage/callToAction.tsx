import { auth } from '@/auth';
import { Container } from '@/components/ui';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserImages } from './userImages';

export const CallToAction: React.FC = async () => {
  const session = await auth();
  return (
    <div className="relative py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
        <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative">
          <div className="flex items-center justify-center -space-x-2">
            <UserImages />
          </div>
          <div className="m-auto mt-6 space-y-6 md:w-8/12 lg:w-7/12">
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
              Get Started now
            </h1>
            <p className="text-center text-xl text-gray-600 dark:text-gray-300">
              Join other peoples that have already started this journey to a
              more positive year.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button className="h-12 rounded-full bg-primary text-base font-semibold text-white hover:bg-primary/80">
                <Link href={session?.user ? '/fact' : '/auth/signin'}>
                  Get started
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-full text-base font-semibold text-primary dark:text-white"
              >
                <Link href="/about">More About</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
