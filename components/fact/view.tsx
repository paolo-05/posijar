import { auth } from '@/auth';
import { getRandomPhrase, getTodayFact } from '@/lib/data';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FactDropdown } from './dropdown';

export const ViewFact = async () => {
	const session = await auth();

	if (!session) {
		redirect('/auth/signin');
	}

	const userId = parseInt(session.user?.id || '');
	const fact = await getTodayFact(userId);
	const randomPhrase = await getRandomPhrase();

	if (!fact) {
		redirect('/fact/create');
	}

	return (
		<Card className='mx-auto sm:max-w-sm lg:w-full'>
			<CardHeader>
				<CardTitle> Your Today&apos;s PosiFact</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='flex items-center justify-between rounded-lg bg-secondary p-3'>
					<p>{fact.content}</p>
					<FactDropdown factId={fact.id} userId={userId} />
				</div>
			</CardContent>
			<CardFooter>
				<div className='flex items-center justify-center gap-4'>
					<p className=' max-w-80'>{randomPhrase + ' '}</p>
					<p>Or</p>
					<Button>
						<Link aria-label='View your Jar' href={'/my-jar'}>
							View your Jar
						</Link>
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
};
