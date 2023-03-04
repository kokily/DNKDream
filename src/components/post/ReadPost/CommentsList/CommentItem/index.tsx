import type { Comment } from '@prisma/client';
import { useSession } from 'next-auth/react';
import AddReply from './AddReply';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';
import useUpdateComment from './CommentHeader/useUpdateComment';
import Reply from './Reply';
import { Contents, ItemContainer } from './styles';

interface Props {
  comment: Comment;
}

export default function CommentItem({ comment }: Props) {
  const { status } = useSession();
  const commentHooks = useUpdateComment({ comment });

  return (
    <ItemContainer>
      <Contents>
        <CommentHeader comment={comment} />
        <CommentBody
          deleted={comment.deleted}
          edit={commentHooks.isEdit}
          body={commentHooks.body}
          onChangeBody={commentHooks.onChange}
        />

        {comment.reply && <Reply comment={comment} reply={comment.reply} />}
      </Contents>

      {status === 'authenticated' && <AddReply commentId={comment.id} />}
    </ItemContainer>
  );
}
