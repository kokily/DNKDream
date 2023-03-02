import { memo } from 'react';
import { TagsListContainer } from './styles';
import TagItem from './TagItem';

interface Props {
  tags: string[];
  onTagPost: (tag: string) => void;
}

const TagsList = memo<Props>(({ tags, onTagPost }) => (
  <TagsListContainer>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onTagPost={onTagPost} />
    ))}
  </TagsListContainer>
));

TagsList.displayName = 'TagsList';

export default TagsList;
