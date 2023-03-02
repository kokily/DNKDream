import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function removeReplyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'DELETE') {
    const reply = await db.comment.update({
      where: { id },
      data: {
        reply: null,
      },
    });

    res.status(200).json(reply);
  } else {
    res.status(400);
  }
}
