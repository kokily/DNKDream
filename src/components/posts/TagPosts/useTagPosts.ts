import type { PostType } from 'types';
import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import useLocalStorage from 'use-local-storage';
import useObserver from '@/libs/hooks/useObserver';
import { listPostsAPI } from '../AllPosts/useAllPosts';

export default function useTagPosts() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { tag }: { tag?: string } = router.query;
  const [scrollY, setScrollY] = useLocalStorage('listTagPostsScroll', 0);

  // Data Fetching
  const { data, fetchNextPage } = useInfiniteQuery(
    'listTagPosts',
    ({ pageParam }) => listPostsAPI({ cursor: pageParam, tag }),
    {
      enabled: true,
      getNextPageParam: (data) =>
        data && data.length === 10 ? data[data.length - 1].id : undefined,
    }
  );

  const posts = useMemo(() => {
    if (!data) return [];

    return ([] as PostType[]).concat(...data.pages);
  }, [data]);

  const onReadPost = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/post/${id}`);
  };

  const onTagPost = (tag: string) => {
    router.replace(`/tag/${tag}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  useEffect(() => {
    async function refreshData() {
      await queryClient.clear();
    }

    refreshData();
  }, [tag]);

  return {
    posts,
    tag,
    onReadPost,
    onTagPost,
    setTarget,
  };
}
