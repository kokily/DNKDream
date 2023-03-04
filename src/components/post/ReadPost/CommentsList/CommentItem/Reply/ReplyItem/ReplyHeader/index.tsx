import type { Comment } from '@prisma/client';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Button from '@/components/common/Button';
import formatDate from '@/libs/utils/formatDate';
import { Avatar, Header, InfoBox, RightBox } from './styles';

interface Props {
  comment: Comment;
  isEdit: boolean;
  onToggleIsEdit: () => void;
  onUpdateReply: () => void;
  onRemoveReplyClick: () => void;
}

export default function ReplyHeader({ ...rest }: Props) {
  const { status } = useSession();

  return (
    <Header>
      <Avatar>
        <Image
          src="/assets/images/profile.jpg"
          alt="Profile"
          width={50}
          height={50}
        />
      </Avatar>

      <InfoBox>
        <div className="name">관리자</div>
        <div className="date">
          {formatDate(rest.comment.updatedAt.toString())} 작성
        </div>
      </InfoBox>

      {status === 'authenticated' && (
        <RightBox>
          {rest.isEdit ? (
            <>
              <Button back onClick={rest.onToggleIsEdit}>
                취소하기
              </Button>
              <Button upload onClick={rest.onUpdateReply}>
                저장하기
              </Button>
            </>
          ) : (
            <>
              <Button remove onClick={rest.onRemoveReplyClick}>
                삭 제
              </Button>
              <Button submit onClick={rest.onToggleIsEdit}>
                수 정
              </Button>
            </>
          )}
        </RightBox>
      )}
    </Header>
  );
}
