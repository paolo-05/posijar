import { signIn } from 'next-auth/react';

export const useSignIn = () => {
	const handleSignIn = () => {
		signIn();
	};
	return { handleSignIn };
};
