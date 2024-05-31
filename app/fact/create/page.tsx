import { auth } from '@/auth';
import { CreateFactForm } from '@/components/fact';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Create Your PosiFact',
};

export default async function FactCreatePage() {
  const session = await auth();

  if (!session) {
    return redirect('/auth/signin');
  }

  return <CreateFactForm userId={parseInt(session.user?.id || '')} />;
}
