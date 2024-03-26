import { useEffect, useState } from 'react';

export const useDropdown = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.stopPropagation();
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const handleCloseDropdown = (): void => {
			if (isMenuOpen) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('click', handleCloseDropdown);

		return () => document.removeEventListener('click', handleCloseDropdown);
	}, [isMenuOpen]);

	return { isMenuOpen, toggleDropdown, setIsMenuOpen };
};
