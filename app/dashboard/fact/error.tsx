'use client';

import { Button } from '@/components/ui/button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return (
		<main className='flex h-full flex-col items-center justify-center'>
			<h2 className='mt-4 text-center text-3xl'>Something went wrong!</h2>
			<p className='mb-4 mt-1 text-muted-foreground'>Maybe you forgot to add your fact?</p>
			<Button onClick={() => reset()}>Try again</Button>
		</main>
	);
}
