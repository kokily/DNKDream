import {
  Container,
  TagList,
  TagItem,
  ThumbnailBox,
  Title,
  Body,
} from './styles';
import Markdown from '@/components/common/Markdown';

interface Props {
  category: string;
  title: string;
  body: string;
  thumbnail: string;
  tags: string[];
}

export default function PostPreview({ ...rest }: Props) {
  return (
    <Container>
      <h4>카테고리: {rest.category}</h4>

      {rest.tags && (
        <TagList>
          태그:{' '}
          {rest.tags.map((tag) => (
            <TagItem key={tag}>#{tag}</TagItem>
          ))}
        </TagList>
      )}

      <hr />

      {rest.thumbnail && (
        <ThumbnailBox>
          <img src={rest.thumbnail} alt="Thumbnail" />
        </ThumbnailBox>
      )}

      <Title>{rest.title}</Title>
      <Body>
        <Markdown markdown={rest.body} />
      </Body>
    </Container>
  );
}
