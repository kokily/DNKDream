import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function listPostsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const title = req.query.title as string;
  const tag = req.query.tag as string;
  const category = req.query.category as string;

  const cursor = (req.query.cursor as string) ?? '';
  const cursorObj = cursor === '' ? undefined : { id: cursor };
  const limit = 10;

  if (req.method === 'GET') {
    let where = tag
      ? {
          title: {
            contains: title,
          },
          category: {
            contains: category,
          },
          tags: {
            has: tag,
          },
        }
      : {
          title: {
            contains: title,
          },
          category: {
            contains: category,
          },
        };

    const posts = await db.post.findMany({
      where,
      include: {
        comments: true,
      },
      skip: cursor !== '' ? 1 : 0,
      cursor: cursorObj,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(posts);
  } else {
    res.status(400);
  }
}
