import type { PostType } from 'types';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { readPostAPI } from '@/components/post/ReadPost/useReadPost';
import imageUpload from '@/libs/utils/imageUpload';

type AddPostPayload = {
  category: string;
  title: string;
  body: string;
  tags: string[];
  thumbnail: string;
};

async function addPostAPI(payload: AddPostPayload) {
  const response = await axios.post<PostType>(`/api/write/add`, payload);
  return response.data;
}

type UpdatePostPayload = {
  id: string;
} & AddPostPayload;

async function updatePostAPI(payload: UpdatePostPayload) {
  const { id, category, title, body, tags, thumbnail } = payload;
  const response = await axios.put<PostType>(`/api/write/update/${id}`, {
    category,
    title,
    body,
    tags,
    thumbnail,
  });
  return response.data;
}

export default function useAddPost() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;

  // State
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [thumbnail, setThumbnail] = useState('');
  const [leftRatio, setLeftRatio] = useState(0.5);
  const leftLand = { flex: leftRatio };
  const divideLand = { left: `${leftRatio * 100}` };
  const rightLand = { flex: 1 - leftRatio };

  // Data Mutations
  const addPostMutate = useMutation(addPostAPI);
  const updatePostMutate = useMutation(updatePostAPI);

  // Update Post Fetching
  useQuery('updatePost', () => readPostAPI(id), {
    enabled: !!id,
    onSuccess: (data) => {
      setCategory(data.category);
      setTitle(data.title);
      setBody(data.body);
      setTags(data.tags);
      setThumbnail(data.thumbnail);
    },
    onError: () => {},
  });

  const onBack = () => router.back();

  const onChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (text: string) => {
    setBody(text);
  };

  const onChangeTags = (nextTags: string[]) => {
    setTags(nextTags);
  };

  const onThumbnail = () => {
    const upload = document.createElement('input');

    upload.type = 'file';
    upload.onchange = async (e) => {
      if (!upload.files) return;

      const file = upload.files[0];
      const target = await imageUpload(file);

      setThumbnail(target);
    };
    upload.click();
  };

  const onUpload = async (file: File) => {
    const target = await imageUpload(file);

    let prevBody = body;
    let newBody = `${prevBody}\n\n![](${target})`;

    setBody(newBody);
  };

  // Layout Mouse Move
  const onMouseMove = (e: any) => {
    setLeftRatio(e.clientX / window.innerWidth);
  };

  const onMouseUp = (e: any) => {
    document.body.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const onDivideMouseDown = (e: any) => {
    document.body.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const onAddPost = async (e: SyntheticEvent) => {
    e.preventDefault();

    if ([category, title, body, tags, thumbnail].includes('')) {
      toast.error('빈 칸 없이 입력하세요');
      return;
    }

    try {
      if (!id) {
        const response = await addPostMutate.mutateAsync({
          category,
          title,
          body,
          tags,
          thumbnail,
        });

        await queryClient.clear();
        await router.replace(`/post/${response.id}`);
      } else {
        const response = await updatePostMutate.mutateAsync({
          id,
          category,
          title,
          body,
          tags,
          thumbnail,
        });

        await queryClient.clear();
        await router.replace(`/post/${response.id}`);
      }
    } catch (err: any) {
      toast.error(err);
    }
  };

  return {
    category,
    title,
    body,
    tags,
    thumbnail,
    onBack,
    onChangeCategory,
    onChangeTitle,
    onChangeBody,
    onChangeTags,
    leftLand,
    divideLand,
    rightLand,
    onThumbnail,
    onUpload,
    onDivideMouseDown,
    onAddPost,
  };
}
