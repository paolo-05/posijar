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

	const { fact }: { fact: FactType | undefined } = req.body;

	if (!fact) {
		res.status(401).end();
		return;
	}

	try {
		await Fact.edit(fact.id!, session.user.id, fact.content);

		res.status(200).json({ message: 'OK' });
	} catch (e) {
		res.status(500).end();
	}
}
