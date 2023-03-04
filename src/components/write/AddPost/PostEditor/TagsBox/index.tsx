import { TagBoxContainer, TagForm } from './styles';
import TagsList from './TagsList';
import usePostTags from './usePostTags';

interface Props {
  tags: string[];
  onChangeTags: (nextTags: string[]) => void;
}

export default function TagsBox({ tags, onChangeTags }: Props) {
  const useTagHooks = usePostTags({ tags, onChangeTags });

  return (
    <TagBoxContainer>
      <p>태그</p>

      <TagForm onSubmit={useTagHooks.onSetTags}>
        <input
          placeholder="엔터로 입력"
          value={useTagHooks.input}
          onChange={useTagHooks.onChange}
        />
        <button type="submit">추가</button>
      </TagForm>

      <TagsList
        tags={useTagHooks.localTags}
        onRemoveTag={useTagHooks.onRemoveTag}
      />
    </TagBoxContainer>
  );
}
