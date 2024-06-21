import { auth } from '@/auth';
import { getWeekFacts } from '@/lib/data';
import { formatTimeToLocal } from '@/lib/utils';
import { redirect } from 'next/navigation';
import { FC } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface DaysGridProps {
	startOfWeekDate: Date;
	endOfWeekDate: Date;
}

export const DaysGrid: FC<DaysGridProps> = async ({ startOfWeekDate, endOfWeekDate }) => {
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const session = await auth();

	if (!session) {
		redirect('/auth/signin');
	}

	const weekFacts = await getWeekFacts(parseInt(session.user?.id || ''), startOfWeekDate, endOfWeekDate);

	const getFactForDay = (day: number) => {
		// Sunday is 0, but we want it to be 7
		if (day === 7) day = 0;

		return weekFacts.find((fact) => new Date(fact.created_at).getDay() === day);
	};

	return (
		<div className='grid grid-cols-1 gap-3 py-14 lg:grid-cols-7'>
			{days.map((day) => {
				const todayFact = getFactForDay(days.indexOf(day) + 1);
				return (
					<Card className='relative h-80 w-52' key={day}>
						<CardHeader>
							<CardTitle>
								<h2>{day}</h2>
							</CardTitle>
						</CardHeader>
						<CardContent>{todayFact?.content || 'No fact for this day'}</CardContent>
						<CardFooter className='absolute bottom-0'>
							{todayFact ? <>Wrote this fact at {formatTimeToLocal(todayFact.created_at)}</> : <></>}
						</CardFooter>
					</Card>
				);
			})}
		</div>
	);
};
