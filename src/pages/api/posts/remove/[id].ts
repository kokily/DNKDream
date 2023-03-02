import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function removePostHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'DELETE') {
    await db.post.delete({
      where: { id },
    });

    res.status(204);
  } else {
    res.status(400);
  }
}
