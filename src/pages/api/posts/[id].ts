import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function readPostHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'GET') {
    const post = await db.post.findUnique({
      where: { id },
    });

    res.status(200).json(post);
  } else {
    res.status(400);
  }
}
