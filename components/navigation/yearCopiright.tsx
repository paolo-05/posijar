'use client';

import { useState } from 'react';

export const YearCopiright = () => {
	const [year] = useState(new Date().getFullYear());

	return (
		<span className='block text-gray-500 dark:text-gray-400'>
			PosiJar &copy; <span>{year}</span>
		</span>
	);
};
