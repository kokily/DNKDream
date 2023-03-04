import { memo } from 'react';
import { TagsListContainer } from './styles';
import TagItem from './TagItem';

interface Props {
  tags: string[];
  onRemoveTag: (tag: string) => void;
}

const TagsList = memo<Props>(({ tags, onRemoveTag }) => (
  <TagsListContainer>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemoveTag={onRemoveTag} />
    ))}
  </TagsListContainer>
));

TagsList.displayName = 'TagsList';

export default TagsList;
