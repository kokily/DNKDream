import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function getSitemapHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const sitemaps = await db.post.findMany();

    res.status(200).json(sitemaps);
  } else {
    res.status(400);
  }
}
