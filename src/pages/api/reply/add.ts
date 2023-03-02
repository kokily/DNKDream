import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function addReplyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestType = {
    commentId: string;
    body: string;
  };

  const { commentId, body }: RequestType = req.body;

  if (req.method === 'POST') {
    const reply = await db.comment.update({
      where: { id: commentId },
      data: {
        reply: body,
      },
    });

    res.status(200).json(reply);
  } else {
    res.status(400);
  }
}
