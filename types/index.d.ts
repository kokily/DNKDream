import { Post, Comment } from '@prisma/client';

interface PostType extends Post {
  comments?: Comment[];
}

interface TocType {
  id: string;
  top: number;
}
