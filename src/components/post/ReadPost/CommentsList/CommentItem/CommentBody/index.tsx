import type { ChangeEvent } from 'react';
import { Container, UpdateBody } from './styles';

interface Props {
  deleted: boolean;
  edit: boolean;
  body: string;
  onChangeBody: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function CommentBody({
  deleted,
  edit,
  body,
  onChangeBody,
}: Props) {
  return (
    <Container deleted={deleted}>
      {deleted ? (
        '댓글이 삭제되었습니다'
      ) : edit ? (
        <UpdateBody name="body" value={body} onChange={onChangeBody} />
      ) : (
        body
      )}
    </Container>
  );
}
