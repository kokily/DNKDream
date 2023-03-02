import axios from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

async function listTagsAPI() {
  const response = await axios.get<string[]>('/api/posts/tags');
  return response.data;
}

export default function useListTags() {
  const router = useRouter();
  const { data } = useQuery('listTags', () => listTagsAPI(), { enabled: true });

  const onTagPost = (tag: string) => {
    router.push(`/tag/${tag}`);
  };

  return {
    tags: data,
    onTagPost,
  };
}
