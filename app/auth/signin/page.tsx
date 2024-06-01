import { auth, providerMap, signIn } from '@/auth';
import { GoogleIcon } from '@/components/svg/googleIcon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Sign in  ',
	alternates: {
		canonical: '/auth/signin',
	},
};

export default async function SignInPage() {
	const session = await auth();

	if (session) {
		redirect('/');
	}

	return (
		<main className='flex h-screen items-center justify-center'>
			<Card className='mx-auto -mt-32'>
				<CardHeader>
					<CardTitle className='text-2xl'>Login </CardTitle>
					<CardDescription>Select a provider to sign in with</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='grid gap-4'>
						{providerMap.map((provider) => (
							<form
								key={provider.id}
								action={async () => {
									'use server';
									await signIn(provider.id);
								}}
							>
								<Button type='submit' className='w-full'>
									{provider.name === 'Google' ? (
										<GoogleIcon className='me-2 h-4 w-4' />
									) : (
										<Image
											loading='lazy'
											height='24'
											width='24'
											id='provider-logo-dark'
											src='https://authjs.dev/img/providers/discord.svg'
											alt={'discordLogo'}
											className='me-2'
										/>
									)}
									Login with {provider.name}
								</Button>
							</form>
						))}
					</div>
				</CardContent>
				<CardFooter className='flex items-center justify-center gap-10'>
					<Link aria-label='Terms of Use' href='/tos' className='font-medium underline hover:text-primary'>
						Terms of Use
					</Link>
					<Link aria-label='Privacy Policy' href='/privacy' className='font-medium underline hover:text-primary'>
						Privacy Policy
					</Link>
					<Link
						aria-label='Contact Support'
						href='mailto:paolo.bianchessi@icloud.com'
						className='font-semibold underline hover:text-primary'
					>
						Contact Us
					</Link>
				</CardFooter>
			</Card>
		</main>
	);
}
