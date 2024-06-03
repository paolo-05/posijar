import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
	return (
		<main className='flex h-full flex-col items-center justify-center gap-2'>
			<h2 className='text-3xl font-semibold'>404 Not Found</h2>
			<p>Could not find the requested Fact.</p>
			<Button asChild>
				<Link href='/dashboard'>Go Back</Link>
			</Button>
		</main>
	);
}
