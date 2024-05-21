import { Container } from '@/components/ui';
import { useWeekFacts } from '@/hooks';
import { FC } from 'react';
import { DayItem } from './dayItem';
import { FactModal } from './factModal';

/**
 * Renders a component that displays a recap of the past week's report.
 */
export const WeekRecap: FC = ({}) => {
	const {
		lastWeekStartDate,
		lastWeekEndDate,
		daysOfWeek,
		showFactModal,
		factToShow,
		getFactForDay,
		handleShowFactModal,
		handleFactModalClose,
	} = useWeekFacts();

	return (
		<Container>
			{showFactModal && factToShow && (
				<FactModal fact={factToShow} show={showFactModal} onClose={handleFactModalClose} />
			)}
			<div className='flex flex-col justify-center items-center mt-40'>
				<div>
					<h1 className='text-start text-4xl font-bold text-gray-800 dark:text-gray-100 md:text-5xl mb-4'>
						Your past week report
					</h1>
					<h3 className='px-0.5 text-start text-xl font-semibold text-gray-700 darktext-gray-200'>
						{lastWeekStartDate.toLocaleDateString(undefined, {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}{' '}
						-{' '}
						{lastWeekEndDate.toLocaleDateString(undefined, {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</h3>
				</div>
				<div className='mt-10 grid sm:grid-cols-1 lg:grid-cols-7 gap-1 mb-4'>
					{daysOfWeek.map((day, index) => {
						const fact = getFactForDay(index + 1);
						if (!fact)
							return (
								<div
									key={day}
									className='flex flex-row items-center justify-center w-32 h-32 bg-gray-300 dark:bg-gray-700 m-1 rounded-lg'
								>
									<DayItem day={day} />
								</div>
							);

						return (
							<button
								onClick={() => handleShowFactModal(fact)}
								key={day}
								className='flex flex-row items-center justify-center w-32 h-32 bg-purple-300 dark:bg-purple-700 m-1 rounded-lg'
							>
								<DayItem day={day} />
							</button>
						);
					})}
				</div>
			</div>
		</Container>
	);
};
