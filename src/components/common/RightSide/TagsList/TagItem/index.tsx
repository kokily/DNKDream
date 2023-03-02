import { memo } from 'react';
import { TagContainer } from './styles';

interface Props {
  tag: string;
  onTagPost: (tag: string) => void;
}

const TagItem = memo<Props>(({ tag, onTagPost }) => (
  <TagContainer onClick={() => onTagPost(tag)}>#{tag}</TagContainer>
));

TagItem.displayName = 'TagItem';

export default TagItem;
