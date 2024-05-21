import { FactType } from '@/types/factType';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useMemo } from 'react';

/**
 * Custom hook that retrieves and manages week facts.
 * @returns An object containing the necessary data and functions for managing week facts.
 */
export const useWeekFacts = () => {
	const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const currentDate = useMemo(() => new Date(), []);
	const currentDayOfWeek = currentDate.getDay();
	const lastWeekStartDate = useMemo(
		() => new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDayOfWeek - 6),
		[currentDate, currentDayOfWeek],
	);

	const lastWeekEndDate = useMemo(
		() => new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDayOfWeek),
		[currentDate, currentDayOfWeek],
	);

	const [facts, setFacts] = useState<FactType[]>([]);
	const [factToShow, setFactToShow] = useState<FactType | null | undefined>(null);
	const [showFactModal, setShowFactModal] = useState(false);

	useEffect(() => {
		axios
			.get('/api/fact/get-week-facts?weekStart=' + lastWeekStartDate + '&weekEnd=' + lastWeekEndDate)
			.then((res) => {
				setFacts(res.data);
			})
			.catch((error) => toast.error('Network error. Please try again.'));
	}, [lastWeekEndDate, lastWeekStartDate]);

	const getFactForDay = (day: number) => {
		// Sunday is 0, but we want it to be 7
		if (day === 7) day = 0;

		return facts.find((fact) => new Date(fact.created_at).getDay() === day);
	};

	const handleShowFactModal = (fact: FactType) => {
		setFactToShow(fact);
		setShowFactModal(true);
	};

	const handleFactModalClose = () => {
		setShowFactModal(false);
		setFactToShow(null);
	};

	useEffect(() => {
		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				handleFactModalClose();
			}
		};

		document.addEventListener('keydown', handleEscapeKey);
		return () => {
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, []);

	return {
		lastWeekStartDate,
		lastWeekEndDate,
		daysOfWeek,
		facts,
		showFactModal,
		factToShow,
		getFactForDay,
		handleShowFactModal,
		handleFactModalClose,
	};
};
