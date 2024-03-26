import { useEffect, useState } from 'react';

export const useRandomPhrase = () => {
	const [randomPhrase, setRandomPhrase] = useState('');

	useEffect(() => {
		const phrases = [
			'Great, you did it! Come back tomorrow for the next one.',
			'Well done, mission accomplished! Check back tomorrow for the next one.',
			'Fantastic job! Be sure to return tomorrow for more.',
			"Congratulations, you nailed it! Don't forget to return tomorrow for another challenge.",
			"You've done it splendidly! Visit us again tomorrow for the next one.",
			'Bravo, task completed! Join us again tomorrow for the next challenge.',
		];
		const randomIndex = Math.floor(Math.random() * phrases.length);
		setRandomPhrase(phrases[randomIndex]);
	}, []);

	return { randomPhrase };
};
