import MenuButton from './MenuButton';
import MenuList from './MenuList';
import { Container, Contents, Logo, Spacer } from './styles';
import useHeader from './useHeader';

export default function Header() {
  const headerHooks = useHeader();

  return (
    <Container>
      <Contents>
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
