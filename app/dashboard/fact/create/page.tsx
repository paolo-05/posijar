import { auth } from '@/auth';
import { CreateFactForm } from '@/components/fact';
import { getTodayFact } from '@/lib/data';
import { redirect } from 'next/navigation';

export const metadata = {
	title: 'Create Your PosiFact',
	alternates: {
		canonical: '/dashboard/fact/create',
	},
};

export default async function FactCreatePage() {
	const session = await auth();

	if (!session) {
		return redirect('/auth/signin');
	}

	const fact = await getTodayFact(parseInt(session.user?.id || ''));

	if (fact) {
		redirect('/dashboard/');
	}

	return <CreateFactForm userId={parseInt(session.user?.id || '')} />;
}
