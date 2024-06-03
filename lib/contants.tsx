// here we declare all the contants, we need a tsx file since some of the variables inclued tsx code.

import { Sparkles, CalendarHeart, ListStart } from 'lucide-react';

export const DASHBOARD_LINKS = [
	{
		label: "Today's PosiFact",
		href: '/dashboard',
		icon: <Sparkles className='h-4 w-4' />,
	},
	{
		label: 'My Jar',
		href: '/dashboard/my-jar',
		icon: <CalendarHeart className='h-4 w-4' />,
	},
	{
		label: 'Week Recap',
		href: '/dashboard/week-recap',
		icon: <ListStart className='h-4 w-4' />,
	},
	// {
	// 	label: "Today's PosiFact",
	// 	href: '/dashboard',
	// 	icon: <Sparkles className='h-4 w-4' />,
	// },
];
