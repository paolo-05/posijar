import { User } from '@/models/userModel';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.status(405);
	}
	const session = await getServerSession(req, res, authOptions);

	if (!session) {
		return res.status(401).json({ message: 'Unauthorized' });
	}

	try {
		await User.delete(session.user.id);

		res.status(200).json({ message: 'OK' });
	} catch (e) {
		console.error(e);

		res.status(500).json({ error: 'Error in server.' });
	}
}
