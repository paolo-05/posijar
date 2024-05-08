import { FC } from 'react';
import { Container } from '../ui';

export const WeekRecap: FC = () => {
	const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	return (
		<Container>
			<div className='flex flex-col justify-center items-center mt-40'>
				<div>
					<h1 className='text-start text-4xl font-bold text-gray-800 dark:text-white md:text-5xl mb-4'>
						Your week report
					</h1>
				</div>
				<div className='flex flex-row justify-center items-center mt-10'>
					{daysOfWeek.map((day) => (
						<div key={day} className='m-2 p-4'>
							<h2 className='text-lg font-semibold'>{day}</h2>
							{/* Add content for each day */}
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};
