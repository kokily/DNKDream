import type { ReactNode } from 'react';
import Header from '../Header';
import { Container, Contents, FullPage, LeftBox, Main } from './styles';

interface Props {
  children: ReactNode;
  left?: boolean;
  right?: boolean;
}

export default function PageTemplate({ children, left, right }: Props) {
  return (
    <FullPage>
      <Header />

      <Container>
        <Contents>
          {left !== false && (
            <LeftBox>
              <div>Left Side</div>
            </LeftBox>
          )}

          <Main>{children}</Main>

          {right && <div>Right Side</div>}
        </Contents>
      </Container>
    </FullPage>
  );
}
