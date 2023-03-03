import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

export default function useLogin() {
  const { status } = useSession();
  const router = useRouter();
  const [password, setPassword] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      password,
      callbackUrl: '/',
    });

    if (!result?.error) {
      toast.success('어서오세요!');
    } else {
      toast.error(result.error);
    }
  };

  if (status === 'authenticated') {
    toast.warn('이미 로그인되어 있습니다.');
    router.replace('/');
  }

  return {
    password,
    onChange,
    onLogin,
  };
}
