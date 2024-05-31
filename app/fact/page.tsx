import { FactSkeleton, ViewFact } from '@/components/fact';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: "Today's PosiFact",
};

export default async function FactPage() {
  return (
    <Suspense fallback={<FactSkeleton />}>
      <ViewFact />
    </Suspense>
  );
}