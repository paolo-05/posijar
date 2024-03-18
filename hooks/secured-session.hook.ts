import { signIn, useSession } from 'next-auth/react';

/**
 * This hook replaces the default `useSesion` hook from next-auth.
 * Provides an easy way to authenticate the secure the restricted pages.
 */
export const useSecureSession = () => {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			signIn();
		},
	});

	return { session };
};
