import type { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  submit?: boolean;
  back?: boolean;
  remove?: boolean;
  upload?: boolean;
  comment?: boolean;
  onClick?: any;
  children: ReactNode;
}

export default function Button({
  children,
  submit,
  back,
  remove,
  upload,
  ...rest
}: Props) {
  const htmlProps = rest as any;

  return (
    <Container
      submit={submit}
      back={back}
      remove={remove}
      upload={upload}
      {...htmlProps}
      onClick={(e) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        (e.target as HTMLButtonElement).blur();
      }}
    >
      {children}
    </Container>
  );
}
