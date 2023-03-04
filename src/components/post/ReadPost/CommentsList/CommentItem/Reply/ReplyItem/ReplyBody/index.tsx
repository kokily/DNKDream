import type { ChangeEvent } from 'react';
import { Body, UpdateBody } from './styles';

interface Props {
  reply: string;
  isEdit: boolean;
  body: string;
  onChangeBody: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function ReplyBody({ ...rest }: Props) {
  return (
    <Body>
      {rest.isEdit ? (
        <UpdateBody
          name="body"
          value={rest.body}
          onChange={rest.onChangeBody}
        />
      ) : (
        rest.reply
      )}
    </Body>
  );
}
