import { Container } from '../ui';
import { Skeleton } from '../ui/skeleton';

export const JarSkeleton = () => {
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
              <Skeleton className="h-[441px] w-[300px] rounded-full" />
            </div>

            <div className="flex-grow p-4 lg:w-1/2">
              <Skeleton className="mb-3 h-[48px] w-[500px] rounded-full" />
              <Skeleton className="mb-3 h-[32px] w-[500px] rounded-full" />
              <Skeleton className="mb-3 h-[24px] w-[200px] rounded-full" />
              <Skeleton className="mb-3 h-[40px] w-[250px] rounded-lg" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
