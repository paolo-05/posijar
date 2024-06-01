import { auth, signOut } from '@/auth';
import { BlurredBackground } from '@/components/theme';
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
			<BlurredBackground />
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
