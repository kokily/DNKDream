import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';
import overlapTags from '@/libs/utils/overlapTags';

export default async function updatePostHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestType = {
    category: string;
    title: string;
    body: string;
    tags: string[];
    thumbnail: string;
  };

  const id = req.query.id as string;
  const { category, title, body, tags, thumbnail }: RequestType = req.body;

  if (req.method === 'PUT') {
    const nextTags = await overlapTags(tags);
    const post = await db.post.update({
      where: { id },
      data: {
        category,
        title,
        body,
        tags: nextTags,
        thumbnail,
        updatedAt: new Date(),
      },
    });

    res.status(200).json(post);
  } else {
    res.status(400);
  }
}
