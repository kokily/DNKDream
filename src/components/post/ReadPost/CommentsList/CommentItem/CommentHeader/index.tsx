import type { Comment } from '@prisma/client';
import { FaCaretSquareDown, FaCaretDown } from 'react-icons/fa';
import Button from '@/components/common/Button';
import formatDate from '@/libs/utils/formatDate';
import useUpdateComment from './useUpdateComment';
import { Avatar, Container, EditBox, InfoBox, Input, RightBox } from './styles';
import Modal from '@/components/common/Modal';

interface Props {
  comment: Comment;
}

export default function CommentHeader({ comment }: Props) {
  const commentHooks = useUpdateComment({ comment });

  return (
    <Container>
      <Avatar>{comment.username.slice(0, 2)}</Avatar>

      <InfoBox>
        <div className="name">{comment.username} 님</div>
        <div className="date">
          {formatDate(comment.createdAt.toString())} 작성
        </div>
      </InfoBox>

      <RightBox>
        {comment.deleted ? null : commentHooks.isEdit ? (
          <>
            <Button remove onClick={commentHooks.onRemoveComment}>
              삭제하기
            </Button>
            <Button upload onClick={commentHooks.onUpdateComment}>
              수정하기
            </Button>
          </>
        ) : commentHooks.menuOpen ? (
          <EditBox>
            <FaCaretSquareDown size={24} onClick={commentHooks.onToggleMenu} />
            <Button comment onClick={commentHooks.onPasswordModalClick}>
              비밀번호
            </Button>
          </EditBox>
        ) : (
          <FaCaretDown size={24} onClick={commentHooks.onToggleMenu} />
        )}
      </RightBox>

      <Modal
        visible={commentHooks.passwordModal}
        title="비밀번호"
        content={
          <Input
            type="password"
            name="password"
            value={commentHooks.password}
            onChange={commentHooks.onChange}
            placeholder="비밀번호"
          />
        }
        onConfirm={commentHooks.onConfirm}
        onCancel={commentHooks.onCancel}
      />
    </Container>
  );
}
