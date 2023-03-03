import type { ReactNode } from 'react';
import { Container, Logo, Text } from './styles';

interface Props {
  children: ReactNode;
}

export default function AuthTemplate({ children }: Props) {
  return (
    <Container>
      <Logo>
        <Text>관리자 로그인</Text>
      </Logo>

      {children}
    </Container>
  );
}
