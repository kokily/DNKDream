import Button from '@/components/common/Button';
import useReplies from '../useReplies';
import { AddBox, ButtonBox, Container } from './styles';

interface Props {
  commentId: string;
}

export default function AddReply({ commentId }: Props) {
  const addReplyHooks = useReplies({ commentId });

  return (
    <Container>
      <AddBox
        name="body"
        value={addReplyHooks.body}
        onChange={addReplyHooks.onChangeBody}
        placeholder="관리자 댓글 작성"
      />

      <ButtonBox>
        <Button upload onClick={addReplyHooks.onAddReply}>
          저장하기
        </Button>
      </ButtonBox>
    </Container>
  );
}
