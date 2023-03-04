import type { ChangeEvent } from 'react';
import { useState, useCallback, useEffect } from 'react';

interface Props {
  tags: string[];
  onChangeTags: (nextTags: string[]) => void;
}

export default function usePostTags({ tags, onChangeTags }: Props) {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState<string[]>([]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const addTag = useCallback(
    (tag: string) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;

      const nextTags = [...localTags, tag];

      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags]
  );

  const onRemoveTag = useCallback(
    (tag: string) => {
      const nextTags = localTags.filter((text) => text !== tag);

      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags]
  );

  const onSetTags = useCallback(
    (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      addTag(input.trim());
      setInput('');
    },
    [input, addTag]
  );

  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return {
    input,
    localTags,
    onChange,
    onSetTags,
    onRemoveTag,
  };
}
