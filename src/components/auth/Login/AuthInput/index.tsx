import type { ChangeEvent } from 'react';
import { Input } from './styles';

interface Props {
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthInput({ ...rest }: Props) {
  return (
    <Input
      type={rest.type}
      name={rest.name}
      value={rest.value}
      onChange={rest.onChange}
      required
    />
  );
}
