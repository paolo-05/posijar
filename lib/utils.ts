import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatDateToLocal = (dateStr: string, locale: string = 'en-US') => {
	const date = new Date(dateStr);
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	};
	const formatter = new Intl.DateTimeFormat(locale, options);
	return formatter.format(date);
};

export const formatTimeToLocal = (dateStr: string, locale: string = 'en-US') => {
	const date = new Date(dateStr);
	const options: Intl.DateTimeFormatOptions = {
		hour: 'numeric',
		minute: 'numeric',
	};
	const formatter = new Intl.DateTimeFormat(locale, options);
	return formatter.format(date);
};
