import { pool } from '@/models';
import PostgresAdapter from '@auth/pg-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
	pages: {
		signIn: '/auth/signin',
		signOut: '/auth/signout',
	},
	adapter: PostgresAdapter(pool),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
			allowDangerousEmailAccountLinking: true,
		}),
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID ?? '',
			clientSecret: process.env.DISCORD_CLIENT_SECRET ?? '',
		}),
	],
	callbacks: {
		async jwt({ token, account, profile }) {
			// Persist the OAuth access_token and or the user id to the token right after signin
			if (account) {
				token.accessToken = account.access_token;
				token.id = profile?.sub;
			}
			return token;
		},
		async session({ session, token, user }) {
			session.user.id = parseInt(user.id, 10);

			return session;
		},
	},
};

export default NextAuth(authOptions);
