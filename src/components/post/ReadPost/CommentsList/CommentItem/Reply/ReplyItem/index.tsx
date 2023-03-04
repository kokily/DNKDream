import type { Comment } from '@prisma/client';
import Modal from '@/components/common/Modal';
import useReplies from '../../useReplies';
import ReplyBody from './ReplyBody';
import ReplyHeader from './ReplyHeader';
import { Item } from './styles';

interface Props {
  comment: Comment;
  reply: string;
}

export default function ReplyItem({ comment, reply }: Props) {
  const replyItemHooks = useReplies({ commentId: comment.id, reply });

  return (
    <Item>
      <ReplyHeader
        comment={comment}
        isEdit={replyItemHooks.isEdit}
        onToggleIsEdit={replyItemHooks.onToggleIsEdit}
        onUpdateReply={replyItemHooks.onUpdateReply}
        onRemoveReplyClick={replyItemHooks.onRemoveReplyClick}
      />
      <ReplyBody
        reply={reply}
        isEdit={replyItemHooks.isEdit}
        body={replyItemHooks.body}
        onChangeBody={replyItemHooks.onChangeBody}
      />

      <Modal
        title="대댓글 삭제"
        content="정말 삭제하시겠어요?"
        visible={replyItemHooks.removeReplyModal}
        onConfirm={replyItemHooks.onConfirm}
        onCancel={replyItemHooks.onCancel}
      />
    </Item>
  );
}
