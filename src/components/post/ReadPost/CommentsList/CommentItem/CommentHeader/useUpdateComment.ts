import type { Comment } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

type ConfirmPasswordPayload = {
  id: string;
  password: string;
};

async function confirmPasswordAPI(payload: ConfirmPasswordPayload) {
  const { id, password } = payload;
  const response = await axios.post(`/api/posts/comments/password/${id}`, {
    password,
  });
  return response.data;
}

type UpdateCommentPayload = {
  id: string;
  body: string;
};

async function updateCommentAPI(payload: UpdateCommentPayload) {
  const { id, body } = payload;
  const response = await axios.patch(`/api/posts/comments/update/${id}`, {
    body,
  });
  return response.data;
}

async function removeCommentAPI(id: string) {
  const response = await axios.delete(`/api/posts/comments/remove/${id}`);
  return response.data;
}

interface Props {
  comment: Comment;
}

export default function useUpdateComment({ comment }: Props) {
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({
    password: '',
    body: comment.body,
  });
  const { password, body } = inputs;
  const [menuOpen, setMenuOpen] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Data Mutations
  const confirmPasswordMutate = useMutation(confirmPasswordAPI);
  const updateCommentMutate = useMutation(updateCommentAPI);
  const removeCommentMutate = useMutation(removeCommentAPI);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onToggleMenu = () => setMenuOpen((prev) => !prev);

  const onConfirmPassword = async (password: string) => {
    try {
      await confirmPasswordMutate.mutateAsync({
        id: comment.id,
        password,
      });

      setIsEdit(true);
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onUpdateComment = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (body === '') {
      toast.error('댓글을 작성해주세요');
      return;
    }

    try {
      await updateCommentMutate.mutateAsync({
        id: comment.id,
        body,
      });

      onInitComment();
      toast.success('댓글 수정!');
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onRemoveComment = async () => {
    if (window.confirm('정말 삭제하시나요??')) {
      try {
        await removeCommentMutate.mutateAsync(comment.id);
        await queryClient.invalidateQueries(['readPost', 'comments']);

        onInitComment();
        toast.success('댓글 삭제!');
      } catch (err: any) {
        toast.error(err);
      }
    } else {
      return;
    }
  };

  const onPasswordModalClick = () => setPasswordModal(true);

  const onConfirm = () => {
    setPasswordModal(false);
    onConfirmPassword(password);
  };

  const onCancel = () => {
    setPasswordModal(false);
  };

  const onInitComment = () => {
    setInputs({
      password: '',
      body: comment.body,
    });
    setMenuOpen(false);
    setPasswordModal(false);
    setIsEdit(false);
  };

  return {
    password,
    body,
    onChange,
    menuOpen,
    passwordModal,
    isEdit,
    onToggleMenu,
    onPasswordModalClick,
    onConfirm,
    onCancel,
    onUpdateComment,
    onRemoveComment,
  };
}
