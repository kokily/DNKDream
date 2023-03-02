import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function listTagsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const listTags = await db.tag.findMany();
    const tags: string[] = [];

    listTags.map((tag) => {
      tags.push(tag.name);
    });

    res.status(200).json(tags);
  } else {
    res.status(400);
  }
}
