import { useEffect, useState } from 'react';

export const useDropdown = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleDropdown = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const handleKeyDown = (e: any) => {
			if (e.keyCode === 27) {
				setIsMenuOpen(false);
			}
		};
		document.addEventListener('keydown', handleKeyDown);

		return () => document.removeEventListener('keydown', handleKeyDown);
	}, []);

	return { isMenuOpen, toggleDropdown, setIsMenuOpen };
};
