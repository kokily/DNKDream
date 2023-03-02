import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import db from '@/libs/database';

export default async function addCommentHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestType = {
    postId: string;
    username: string;
    password: string;
    body: string;
  };

  const { postId, username, password, body }: RequestType = req.body;

  if (req.method === 'POST') {
    const comment = await db.comment.create({
      data: {
        postId,
        username,
        password: await bcrypt.hash(password, 10),
        body,
      },
    });

    res.status(200).json(comment);
  } else {
    res.status(400);
  }
}
