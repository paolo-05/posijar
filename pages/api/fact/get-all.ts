import { Fact } from '@/models/factModel';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { FactType } from '@/types/factType';
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
		const facts: FactType[] | undefined = await Fact.getAll(session.user.id);

		res.status(200).json({ facts });
	} catch (e) {
		console.error(e);

		res.status(500).json({ error: 'Error in server.' });
	}
}
