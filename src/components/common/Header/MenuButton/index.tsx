import type { MouseEvent } from 'react';
import { MenuButtonContainer } from './styles';

interface Props {
  onClick?: (e: MouseEvent) => void;
}

export default function MenuButton({ onClick }: Props) {
  return <MenuButtonContainer onClick={onClick}>메뉴</MenuButtonContainer>;
}
