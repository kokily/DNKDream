import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import db from '@/libs/database';

export default async function confirmPasswordHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestType = {
    password: string;
  };

  const id = req.query.id as string;
  const { password }: RequestType = req.body;

  if (req.method === 'POST') {
    const comment = await db.comment.findUnique({
      where: { id },
    });

    if (!comment) {
      throw new Error('해당 댓글이 존재하지 않습니다.');
    }

    const valid = await bcrypt.compare(password, comment.password);

    if (!valid) {
      throw new Error('입력하신 비밀번호가 틀렸습니다.');
    }

    res.status(200).json(true);
  }
}
