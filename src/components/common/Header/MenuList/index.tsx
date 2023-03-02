import type { MouseEvent } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { Container, Wrapper, Split } from './styles';
import MenuItem from './MenuItem';

interface Props {
  visible: boolean;
  onClose: (e: MouseEvent) => void;
  toggleMenu: () => void;
}

export default function MenuList({ visible, onClose, toggleMenu }: Props) {
  const { status } = useSession();

  return (
    <Container visible={visible} onClick={onClose}>
      <Wrapper>
        {visible && (
          <>
            <MenuItem href="/">전체 포스트</MenuItem>
            <Split />
            <MenuItem href="/about">소개글</MenuItem>

            {status === 'authenticated' ? (
              <>
                <MenuItem href="/write">글 작성</MenuItem>
                <Split />
                <MenuItem
                  onClick={async () => {
                    await signOut({
                      callbackUrl: '/',
                    });
                  }}
                >
                  로그아웃
                </MenuItem>
              </>
            ) : (
              <MenuItem href="/login">관리자 로그인</MenuItem>
            )}
          </>
        )}
      </Wrapper>
    </Container>
  );
}
