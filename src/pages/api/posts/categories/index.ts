import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function listCategoriesHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const posts = await db.post.findMany();
    let prevCategories: string[] = [];

    posts.map((post) => {
      prevCategories.push(post.category);
    });

    if (prevCategories.length < 1) {
      throw new Error('아직 포스트가 존재하지 않습니다.');
    }

    const categories = [...new Set(prevCategories)];

    res.status(200).json(categories);
  } else {
    res.status(400);
  }
}
