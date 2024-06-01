'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { createFact } from '@/lib/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
	id: z.number(),
	content: z.string().min(1, 'Please enter a fact'),
	userId: z.number(),
	date: z.string(),
});

interface FactFormProps {
	userId: number;
}

export const CreateFactForm: FC<FactFormProps> = ({ userId }) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			content: '',
		},
	});

	return (
		<Card>
			<Form {...form}>
				<form action={createFact}>
					<CardHeader>
						<CardTitle>Insert your today&apos;s PosiFact</CardTitle>
						<CardDescription>
							Join other peoples that have already joined this journey to a more positive year.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<FormField
							control={form.control}
							name='content'
							render={({ field }) => (
								<FormItem>
									<Textarea {...field} placeholder='Today was sunny... I love sun days.' />
									<FormMessage />
								</FormItem>
							)}
						/>
						<input type='hidden' name='userId' value={userId} />
					</CardContent>
					<CardFooter>
						<Button type='submit'>Save</Button>
					</CardFooter>
				</form>
			</Form>
		</Card>
	);
};
