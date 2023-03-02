import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function updateReplyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestType = {
    body: string;
  };

  const id = req.query.id as string;
  const { body }: RequestType = req.body;

  if (req.method === 'PATCH') {
    const reply = await db.comment.update({
      where: { id },
      data: {
        reply: body,
        updatedAt: new Date(),
      },
    });

    res.status(200).json(reply);
  } else {
    res.status(400);
  }
}
