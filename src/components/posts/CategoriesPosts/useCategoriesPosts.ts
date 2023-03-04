import type { PostType } from 'types';
import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import useLocalStorage from 'use-local-storage';
import { listPostsAPI } from '../AllPosts/useAllPosts';
import useObserver from '@/libs/hooks/useObserver';

export default function useCategoriesPosts() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { category }: { category?: string } = router.query;
  const [scrollY, setScrollY] = useLocalStorage('categoriesListScroll', 0);

  // Data Fetching
  const { data, fetchNextPage } = useInfiniteQuery(
    'listCategoriesPosts',
    ({ pageParam }) => listPostsAPI({ cursor: pageParam, category }),
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
  }, [category]);

  return {
    posts,
    category,
    onReadPost,
    onTagPost,
    setTarget,
  };
}
