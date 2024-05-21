import { Fact } from '@/models';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { FactType } from '@/types/factType';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		res.status(405).end();
		return;
	}
	const session = await getServerSession(req, res, authOptions);

	if (!session) {
		res.status(401).end();
		return;
	}

	try {
		const facts: FactType[] | undefined = await Fact.getAll(session.user.id);

		res.status(200).json({ facts });
	} catch (e) {
		res.status(500).end();
	}
}
