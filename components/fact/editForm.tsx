'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { updateFact } from '@/lib/actions';
import { Fact } from '@/types/factType';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  id: z.number(),
  content: z.string().min(1, 'Please enter a fact'),
  userId: z.number(),
  date: z.string(),
});

interface EditFactFormProps {
  fact: Fact;
  userId: number;
}

export const EditFactForm: FC<EditFactFormProps> = ({ fact, userId }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: fact.content,
    },
  });

  const updateFactWithId = updateFact.bind(null, fact.id);

  return (
    <Card>
      <Form {...form}>
        <form action={updateFactWithId}>
          <CardHeader>
            <CardTitle>Edit your today&apos;s PosiFact</CardTitle>
            <CardDescription>
              Missed a detail? No problem, you can edit your fact here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <Textarea
                    {...field}
                    placeholder="Today was sunny... I love sun days."
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <input type="hidden" name="userId" value={userId} />
          </CardContent>
          <CardFooter>
            <Button type="submit">Save</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
