import { marked } from 'marked';
import dynamic from 'next/dynamic';
import { TocBox, TocContainer, TocContents } from './styles';
import usePostToc from './usePostToc';

const TocItem = dynamic(import('./TocItem'), { ssr: false });

interface Props {
  html: string;
}

export default function PostToc({ html }: Props) {
  marked.setOptions({
    breaks: true,
  });

  const { tocs, activeId } = usePostToc(marked.parse(html));

  return (
    <TocContainer>
      <TocContents>
        <TocBox>
          {tocs.map((toc) => (
            <TocItem key={toc.id} toc={toc} activeId={activeId} />
          ))}
        </TocBox>
      </TocContents>
    </TocContainer>
  );
}
