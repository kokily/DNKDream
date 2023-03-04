import type { Comment } from '@prisma/client';

import ReplyItem from './ReplyItem';
import { Container } from './styles';

interface Props {
  comment: Comment;
  reply: string;
}

export default function Reply({ comment, reply }: Props) {
  return (
    <Container>
      <ReplyItem comment={comment} reply={reply} />
    </Container>
  );
}
