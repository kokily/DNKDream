import type { Comment } from '@prisma/client';
import AddComment from './AddComment';
import CommentItem from './CommentItem';
import { Container, CountPane, ListBox } from './styles';

interface Props {
  comments: Comment[];
  postId: string;
}

export default function CommentsList({ comments, postId }: Props) {
  return (
    <Container>
      <CountPane>댓글 {comments ? comments.length : 0}개</CountPane>
      <AddComment postId={postId} />

      <ListBox>
        {comments &&
          comments.length > 0 &&
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
      </ListBox>
    </Container>
  );
}
