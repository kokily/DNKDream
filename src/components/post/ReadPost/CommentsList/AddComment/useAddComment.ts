import type { Comment } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

type AddCommentPayload = {
  postId: string;
  username: string;
  password: string;
  body: string;
};

async function addCommentAPI(payload: AddCommentPayload) {
  const response = await axios.post<Comment>(
    '/api/posts/comments/add',
    payload
  );
  return response.data;
}

interface Props {
  postId: string;
}

export default function useAddComment({ postId }: Props) {
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    body: '',
  });
  const { username, password, body } = inputs;

  // Mutation
  const addCommentMutate = useMutation(addCommentAPI);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onAddComment = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await addCommentMutate.mutateAsync({
        postId,
        username,
        password,
        body,
      });

      setInputs({
        username: '',
        password: '',
        body: '',
      });

      await queryClient.invalidateQueries('comments');
    } catch (err: any) {
      toast.error(err);
    }
  };

  return {
    username,
    password,
    body,
    onChange,
    onAddComment,
  };
}
