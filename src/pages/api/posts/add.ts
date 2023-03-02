import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';
import overlapTags from '@/libs/utils/overlapTags';

export default async function addPostHandler(
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

  const { category, title, body, tags, thumbnail }: RequestType = req.body;

  if (req.method === 'POST') {
    const nextTags = await overlapTags(tags);
    const post = await db.post.create({
      data: {
        category,
        title,
        body,
        tags: nextTags,
        thumbnail,
      },
    });

    res.status(200).json(post);
  } else {
    res.status(400);
  }
}
