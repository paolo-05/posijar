import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { redirect } from 'next/navigation';

export const metadata = {
	title: 'Sign Out',
	alternates: {
		canonical: '/auth/signout',
	},
};

export default async function SignOutPage() {
	const session = await auth();

	if (!session) {
		redirect('/auth/signin');
	}

	return (
		<main className='flex min-h-screen items-center justify-center'>
			<div
				aria-hidden='true'
				className='absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'
			>
				<div className='h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700'></div>
				<div className='h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600'></div>
			</div>
			<div className='relative'>
				<Card className='mx-auto -mt-32'>
					<CardHeader>
						<CardTitle className='text-2xl'>Sign out </CardTitle>
						<CardDescription>Are you sure you want to sign out?</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='grid gap-4'>
							<form
								action={async () => {
									'use server';
									await signOut({ redirectTo: '/' });
								}}
							>
								<Button type='submit' className='w-full'>
									Sign out
								</Button>
							</form>
						</div>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
