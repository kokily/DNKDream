import { ItemContainer, ItemActiveLink } from './styles';

interface Props {
  toc: { id: string; text: string; level: number };
  activeId: string;
}

export default function TocItem({ toc, activeId }: Props) {
  return (
    <ItemContainer style={{ marginLeft: toc.level * 12 }}>
      <ItemActiveLink active={activeId === toc.id} href={`#${toc.id}`}>
        {toc.text}
      </ItemActiveLink>
    </ItemContainer>
  );
}
