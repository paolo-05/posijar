'use client';

import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { FC } from 'react';
import { useFormStatus } from 'react-dom';

export const SubmitButton: FC = () => {
	const { pending } = useFormStatus();
	return (
		<Button type='submit' disabled={pending}>
			{pending ? (
				<>
					<Loader2 className='mr-2 h-4 w-4 animate-spin' />
					Please wait
				</>
			) : (
				'Save'
			)}
		</Button>
	);
};
