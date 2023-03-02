import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function listCommentsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id as string;

  if (req.method === 'GET') {
    const comments = await db.comment.findMany({
      where: { postId },
      orderBy: {
        createdAt: 'asc',
      },
    });

    res.status(200).json(comments);
  } else {
    res.status(400);
  }
}
