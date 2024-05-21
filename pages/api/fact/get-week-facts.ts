import { Fact } from '@/models';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		res.status(405).json({ message: 'Method not allowed' });
	}
	const { weekStart, weekEnd } = req.query;

	if (!weekStart || !weekEnd) {
		res.status(400).end();
		return;
	}

	const weekStartDate = new Date(weekStart as string);
	const weekEndDate = new Date(weekEnd as string);

	const session = await getServerSession(req, res, authOptions);

	if (!session) {
		res.status(401).end();
		return;
	}

	try {
		const weekFacts = await Fact.getWeekFacts(session.user.id, weekStartDate, weekEndDate);

		res.status(200).json(weekFacts);
	} catch (error) {
		res.status(500).end();
	}
}
