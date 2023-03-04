import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

type AddReplyPayload = {
  commentId: string;
  body: string;
};

async function addReplyAPI(payload: AddReplyPayload) {
  const response = await axios.post('/api/reply/add', payload);
  return response.data;
}

async function removeReplyAPI(commentId: string) {
  const response = await axios.delete(`/api/reply/remove/${commentId}`);
  return response.data;
}

async function updateReplyAPI(payload: AddReplyPayload) {
  const response = await axios.patch(`/api/reply/update/${payload.commentId}`, {
    body: payload.body,
  });
  return response.data;
}

interface Props {
  commentId: string;
  reply?: string;
}

export default function useReplies({ commentId, reply }: Props) {
  const queryClient = useQueryClient();
  const [body, setBody] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [removeReplyModal, setRemoveReplyModal] = useState(false);

  // Data Mutations
  const addReplyMutate = useMutation(addReplyAPI);
  const removeReplyMutate = useMutation(removeReplyAPI);
  const updateReplyMutate = useMutation(updateReplyAPI);

  const onChangeBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const onAddReply = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (body === '') {
      toast.error('대댓글을 입력하세요.');
      return;
    }

    try {
      await addReplyMutate.mutateAsync({
        commentId,
        body,
      });

      toast.success('대댓글 저장!');
      setBody('');

      await queryClient.invalidateQueries('comments');
      await queryClient.clear();
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onRemoveReply = async () => {
    if (reply) {
      try {
        await removeReplyMutate.mutateAsync(commentId);
        await queryClient.invalidateQueries('comments');
        await queryClient.clear();
      } catch (err: any) {
        toast.error(err);
      }
    } else {
      return;
    }
  };

  const onUpdateReply = async () => {
    if (body === '') {
      toast.error('대댓글을 입력하세요.');
      return;
    }

    if (reply) {
      try {
        await updateReplyMutate.mutateAsync({
          commentId,
          body,
        });

        toast.success('대댓글 수정');
        setBody('');

        await queryClient.invalidateQueries('comments');
        await queryClient.clear();
      } catch (err: any) {
        toast.error(err);
      }
    } else {
      return;
    }
  };

  const onRemoveReplyClick = () => setRemoveReplyModal(true);

  const onConfirm = () => {
    setRemoveReplyModal(false);
    onRemoveReply();
  };

  const onCancel = () => setRemoveReplyModal(false);

  const onToggleIsEdit = () => setIsEdit((prev) => !prev);

  return {
    body,
    onChangeBody,
    onAddReply,
    onUpdateReply,
    removeReplyModal,
    onRemoveReplyClick,
    onConfirm,
    onCancel,
    isEdit,
    onToggleIsEdit,
  };
}
