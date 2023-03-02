import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function removeCommentHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'DELETE') {
    await db.comment.update({
      where: { id },
      data: {
        deleted: true,
        updatedAt: new Date(),
      },
    });

    res.status(204);
  } else {
    res.status(400);
  }
}
