import { Fact } from '@/models';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
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
		const count: number | undefined = await Fact.getCount(session.user.id);

		res.status(200).json({ count });
	} catch (e) {
		res.status(500).end();
	}
}
