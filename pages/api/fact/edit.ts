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

	const { fact }: { fact: FactType | undefined } = req.body;

	if (!fact) {
		return res.status(401).json({ message: 'Missing arguments' });
	}

	try {
		await Fact.edit(fact.id!, session.user.id, fact.content);

		res.status(200).json({ message: 'OK' });
	} catch (e) {
		console.error(e);

		res.status(500).json({ error: 'Error in server.' });
	}
}
