import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '../ui/skeleton';

export const ProfileSkeleton = () => {
  return (
    <Card className="-mt-32 w-[312px]">
      <CardHeader>
        <CardTitle className="text-2xl">
          <Skeleton className="h-[64px] w-[274px]" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="my-3 text-gray-600 dark:text-gray-200">
          <Skeleton className="h-8 w-1/2" />
        </div>
        <div className=" text-gray-600 dark:text-gray-200">
          <Skeleton className="h-8 w-2/3" />
        </div>
      </CardContent>
      <CardFooter>
        <Skeleton className="h-16 w-1/3" />
      </CardFooter>
    </Card>
  );
};
