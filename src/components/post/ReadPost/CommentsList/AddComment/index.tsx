import Button from '@/components/common/Button';
import {
  ButtonBox,
  Container,
  Content,
  Input,
  InputGroup,
  UserInfo,
} from './styles';
import useAddComment from './useAddComment';

interface Props {
  postId: string;
}

export default function AddComment({ postId }: Props) {
  const addCommentHooks = useAddComment({ postId });

  return (
    <Container>
      <UserInfo>
        <InputGroup>
          <Input
            type="text"
            name="username"
            value={addCommentHooks.username}
            onChange={addCommentHooks.onChange}
            placeholder="이름"
          />
        </InputGroup>
        <InputGroup style={{ marginLeft: '0.4rem' }}>
          <Input
            type="password"
            name="password"
            value={addCommentHooks.password}
            onChange={addCommentHooks.onChange}
            placeholder="비밀번호"
          />
        </InputGroup>
      </UserInfo>

      <Content
        name="body"
        value={addCommentHooks.body}
        onChange={addCommentHooks.onChange}
      />

      <ButtonBox>
        <Button submit onClick={addCommentHooks.onAddComment}>
          댓글 작성
        </Button>
      </ButtonBox>
    </Container>
  );
}
