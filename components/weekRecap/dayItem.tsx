import { FC } from 'react';

interface DayItemProps {
	day: string;
}

export const DayItem: FC<DayItemProps> = ({ day }) => (
	<h2 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>{day}</h2>
);
