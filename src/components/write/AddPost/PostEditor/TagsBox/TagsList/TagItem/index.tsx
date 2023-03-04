import { memo } from 'react';
import { TagContainer } from './styles';

interface Props {
  tag: string;
  onRemoveTag: (tag: string) => void;
}

const TagItem = memo<Props>(({ tag, onRemoveTag }) => (
  <TagContainer onClick={() => onRemoveTag(tag)}>#{tag}</TagContainer>
));

TagItem.displayName = 'TagItem';

export default TagItem;
