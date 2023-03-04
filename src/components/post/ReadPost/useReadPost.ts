import type { PostType } from 'types';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useMutation, useQueries, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';

async function readPostAPI(id: string) {
  const response = await axios.get<PostType>(`/api/posts/${id}`);
  return response.data;
}

async function listCommentsAPI(id: string) {
  const response = await axios.get(`/api/posts/comments/list/${id}`);
  return response.data;
}

async function removePostAPI(id: string) {
  const response = await axios.delete(`/api/posts/${id}`);
  return response.data;
}

export default function useReadPost() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { status } = useSession();
  const { id }: { id?: string } = router.query;
  const [removeModal, setRemoveModal] = useState(false);

  // Data Mutations
  const removePostMutate = useMutation(removePostAPI);

  // Data Fetching
  const data = useQueries([
    { queryKey: 'readPost', queryFn: () => readPostAPI(id) },
    { queryKey: 'comments', queryFn: () => listCommentsAPI(id) },
  ]);

  const onBack = () => router.back();

  const onUpdatePost = () => router.push(`/write/update/${id}`);

  const onTagPost = (tag: string) => router.replace(`/tag/${tag}`);

  const onSharePost = () => {
    if (typeof window !== 'undefined') {
      window.navigator.clipboard.writeText(
        `https://dnkdream.com/post/${router.query.id}`
      );
      toast.success('링크가 복사되었습니다');
    } else {
      return;
    }
  };

  const onRemovePost = async (): Promise<void> => {
    try {
      await removePostMutate.mutateAsync(id);
      await queryClient.clear();
      router.replace('/');
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onRemovePostClick = () => setRemoveModal(true);

  const onConfirm = () => {
    setRemoveModal(false);
    onRemovePost();
  };

  const onCancel = () => setRemoveModal(false);

  return {
    post: data[0].data,
    comments: data[1].data,
    onBack,
    onUpdatePost,
    onTagPost,
    onSharePost,
    removeModal,
    onRemovePostClick,
    onConfirm,
    onCancel,
    isAdmin: status === 'authenticated',
  };
}
