import Progress from '../Progress';
import MenuButton from './MenuButton';
import MenuList from './MenuList';
import { Container, Contents, Logo, Spacer } from './styles';
import useHeader from './useHeader';

interface Props {
  isProgress?: boolean;
}

export default function Header({ isProgress }: Props) {
  const headerHooks = useHeader();

  return (
    <Container>
      {isProgress && <Progress />}
      <Contents isProgress>
        <Logo onClick={headerHooks.onHome}>D&amp;K Blog</Logo>

        <Spacer />

        <div ref={headerHooks.ref}>
          <MenuButton onClick={headerHooks.onToggleMenu} />
          <MenuList
            visible={headerHooks.menuOpen}
            onClose={headerHooks.onOutsideClick}
            toggleMenu={headerHooks.onToggleMenu}
          />
        </div>
      </Contents>
    </Container>
  );
}
