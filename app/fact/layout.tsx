import { Container } from '@/components/ui';
import Image from 'next/image';

export default function FactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative lg:space-y-40 lg:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
        <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative flex flex-col items-center">
          <Image
            src={'/logo.svg'}
            alt="logo"
            width={512}
            height={512}
            className="w-32"
          />
          <div className="m-auto mt-6 space-y-6 md:w-8/12 lg:w-7/12">
            {children}
          </div>
        </div>
      </Container>
    </main>
  );
}
