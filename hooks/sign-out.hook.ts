import { signOut } from 'next-auth/react';

/**
 * Custom hook for handling user sign out.
 * @returns An object containing the `handleLogout` function.
 */
export const useSignOut = () => {
	const handleLogout = () => {
		signOut({ callbackUrl: '/' });
	};

	return { handleLogout };
};
