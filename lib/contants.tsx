// here we declare all the contants, we need a tsx file since some of the variables include tsx code.

import { GithubIcon, InstagramIcon, TwitterIcon } from '@/components/svg';
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
];

export const TOP_NAVBAR_LINKS = [
	{
		href: '/auth/signin',
		label: "Today's Positive Fact",
	},
	{ href: '/auth/signin', label: 'My PosiJar' },
	{
		href: 'https://www.buymeacoffee.com/paolobianchessi',
		label: 'Support Us',
	},
];

export const FOOTER_LINKS_LEFT = [
	{
		href: '/',
		label: 'Home',
		ariaLabel: 'Homepage',
	},
	{
		href: '/about',
		label: 'About',
		ariaLabel: 'About PosiJar',
	},
	{
		href: '/tos',
		label: 'Terms of Use',
		ariaLabel: 'Terms of Use',
	},
];

export const FOOTER_LINKS_RIGHT = [
	{
		href: 'https://github.com/paolo-05/posijar',
		ariaLabel: 'PosiJar Github Repository',
		icon: <GithubIcon className='w-5' />,
		label: 'Github',
	},
	{
		href: 'https://twitter.com/BianchessiPaolo',
		ariaLabel: 'Creator Twitter Account',
		icon: <TwitterIcon className='w-5' />,
		label: 'Twitter',
	},
	{
		href: 'https://www.instagram.com/paolo.bianchessi/',
		ariaLabel: 'Creator Instagram Account',
		icon: <InstagramIcon className='w-5' />,
		label: 'Instagram',
	},
];
