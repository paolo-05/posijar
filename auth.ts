import NextAuth from 'next-auth';
import type { Provider } from 'next-auth/providers';
import Discord from 'next-auth/providers/discord';
import Google from 'next-auth/providers/google';

import { pool } from '@/lib/db-pool';
import PostgresAdapter from '@auth/pg-adapter';

const providers: Provider[] = [
	Discord({
		clientId: process.env.DISCORD_CLIENT_ID,
		clientSecret: process.env.DISCORD_CLIENT_SECRET,
	}),
	Google({
		clientId: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		allowDangerousEmailAccountLinking: true,
	}),
];

export const providerMap = providers.map((provider) => {
	if (typeof provider === 'function') {
		const providerData = provider();
		return { id: providerData.id, name: providerData.name };
	} else {
		return { id: provider.id, name: provider.name };
	}
});

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PostgresAdapter(pool),
	providers: providers,
	pages: {
		signIn: '/auth/signin',
		signOut: '/auth/signout',
		newUser: '/auth/onboarding',
	},
});
