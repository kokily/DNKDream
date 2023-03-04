import type { ReactNode } from 'react';
import Header from '../Header';
import LeftSide from '../LeftSide';
import RightSide from '../RightSide';
import {
  Container,
  Contents,
  FullPage,
  LeftBox,
  Main,
  RightBox,
} from './styles';

interface Props {
  children: ReactNode;
  left?: boolean;
  right?: ReactNode;
}

export default function PageTemplate({ children, left, right }: Props) {
  return (
    <FullPage>
      <Header />

      <Container>
        <Contents>
          {left !== false && (
            <LeftBox>
              <LeftSide />
            </LeftBox>
          )}

          <Main>{children}</Main>

          {right && <RightBox>{right}</RightBox>}
        </Contents>
      </Container>
    </FullPage>
  );
}
