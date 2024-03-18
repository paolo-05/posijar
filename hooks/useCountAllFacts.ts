import axios from 'axios';
import { useEffect, useState } from 'react';

/**
 * Provides a simple hook for retriving facts count.
 */
export const useCountAllFacts = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		axios
			.post('/api/fact/get-count')
			.then((res) => setCount(res.data.count))
			.catch((e) => console.error(e));
	}, []);

	return { count };
};
