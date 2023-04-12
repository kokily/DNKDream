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
  isProgress?: boolean;
}

export default function PageTemplate({ ...rest }: Props) {
  return (
    <FullPage>
      <Header isProgress={rest.isProgress} />

      <Container>
        <Contents>
          {rest.left !== false && (
            <LeftBox>
              <LeftSide />
            </LeftBox>
          )}

          <Main>{rest.children}</Main>

          {rest.right && <RightBox>{rest.right}</RightBox>}
        </Contents>
      </Container>
    </FullPage>
  );
}
