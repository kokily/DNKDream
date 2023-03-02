import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function listCategoriesHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const posts = await db.post.findMany();
    let categories: string[] = [];

    posts.map((post) => {
      categories.push(post.category);
    });

    if (categories.length < 1) {
      res.status(404).json({ message: '아직 포스트가 존재하지 않습니다.' });
    }

    res.status(200).json(categories);
  } else {
    res.status(400);
  }
}
