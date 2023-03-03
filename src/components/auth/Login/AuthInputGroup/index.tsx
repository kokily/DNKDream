import type { ChangeEvent } from 'react';
import AuthInput from '../AuthInput';
import { InputGroupBar, InputGroupContainer, InputGroupLabel } from './styles';

interface Props {
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export default function AuthInputGroup({ ...rest }: Props) {
  return (
    <InputGroupContainer>
      <AuthInput
        type={rest.type}
        name={rest.name}
        value={rest.value}
        onChange={rest.onChange}
      />

      <InputGroupBar className="bar" />
      <InputGroupLabel>{rest.label}</InputGroupLabel>
    </InputGroupContainer>
  );
}
