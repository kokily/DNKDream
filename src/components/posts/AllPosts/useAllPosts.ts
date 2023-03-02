import type { PostType } from 'types';
import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import qs from 'qs';
import useObserver from '@/libs/hooks/useObserver';
import useLocalStorage from 'use-local-storage';

export type ListPostsQuery = {
  category?: string;
  title?: string;
  tag?: string;
  cursor?: string;
};

async function listPostsAPI(queries: ListPostsQuery) {
  const queryString = qs.stringify(queries);
  const response = await axios.get<PostType[]>(`/api/posts?${queryString}`);
  return response.data;
}

export default function useAllPosts() {
  const router = useRouter();
  const [scrollY, setScrollY] = useLocalStorage('allPostsScroll', 0);

  // Data Fetching
  const { data, fetchNextPage } = useInfiniteQuery(
    'allPosts',
    ({ pageParam }) => listPostsAPI({ cursor: pageParam }),
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

  return {
    posts,
    onReadPost,
    onTagPost,
    setTarget,
  };
}
