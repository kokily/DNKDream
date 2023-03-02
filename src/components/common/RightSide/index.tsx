import { Container, Title } from './styles';
import TagsList from './TagsList';
import useListTags from './useListTags';

export default function RightSide() {
  const { tags, onTagPost } = useListTags();

  return (
    <Container>
      <Title>태그 목록</Title>

      {tags &&
        (tags.length > 15 ? (
          <TagsList tags={tags.splice(0, 14)} onTagPost={onTagPost} />
        ) : (
          <TagsList tags={tags} onTagPost={onTagPost} />
        ))}
    </Container>
  );
}
