import type { ReactNode } from 'react';
import Link from 'next/link';
import { MenuContainer, Item } from './styles';

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: (e: any) => void;
}

export default function MenuItem({ children, href, onClick }: Props) {
  const jsx = <Item onClick={onClick}>{children}</Item>;

  return href ? (
    <Link href={href}>
      <MenuContainer style={{ display: 'block' }}>{jsx}</MenuContainer>
    </Link>
  ) : (
    jsx
  );
}
