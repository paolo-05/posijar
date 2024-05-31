import { auth } from '@/auth';
import { EditFactForm } from '@/components/fact';
import { getFactById } from '@/lib/data';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Edit Your PosiFact',
};

interface Props {
  params: {
    id: string;
  };
}

export default async function FactEditPage({ params }: Props) {
  const session = await auth();

  if (!session) {
    return redirect('/auth/signin');
  }

  const userId = parseInt(session.user?.id || '');
  const fact = await getFactById(params.id);

  if (!fact) {
    redirect('/fact/create');
  }

  return <EditFactForm fact={fact} userId={userId} />;
}
