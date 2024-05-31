import { auth } from '@/auth';
import { Jar } from '@/components/jar/jarSvg';
import { Container } from '@/components/ui';
import { getFactsCount } from '@/lib/data';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FC } from 'react';

export const MyJar: FC = async () => {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  const count = await getFactsCount(parseInt(session.user?.id || ''));

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
          <div className="flex flex-col items-center justify-center -space-x-2 lg:flex-row">
            <div className="flex-shrink-0 p-4 lg:w-1/2">
              <Jar offset={1 - count / 365} />
            </div>

            <div className="flex-grow p-4 lg:w-1/2">
              <h1 className="mb-4 text-start text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
                Your PosiJar Stats
              </h1>
              <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
                Fill up your jar by adding positive moments each day. Every
                contribution adds to your journey of joy and gratitude.
              </p>
              <div className="text-md mb-4 text-gray-900 dark:text-gray-100">
                <p>Total Facts: {count}</p>
              </div>
              <Link
                href="/fact"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-brandInfo before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Add a PosiFact
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
