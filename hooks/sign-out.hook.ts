import { signOut } from 'next-auth/react';

/**
 * A simple hook for handling the `sign out` action
 */
export const useSignOut = () => {
	const handleLogout = () => {
		signOut({ callbackUrl: '/' });
	};

	return { handleLogout };
};
