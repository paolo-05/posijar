import { Fact } from '@/models/factModel';
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

	const { day }: { day: string | undefined } = req.body;

	if (!day) {
		return res.status(401).json({ message: 'Missing arguments' });
	}

	try {
		const fact = await Fact.getToday(day, session.user.id);

		res.status(200).json({ fact });
	} catch (e) {
		console.log(e);

		res.status(500).json({ error: 'Error in server.' });
	}
}
