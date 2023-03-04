import type { SyntheticEvent } from 'react';
import { Header, Right, TopButton } from './styles';

interface Props {
  onBack: () => void;
  onThumbnail: () => void;
  onAddPost: (e: SyntheticEvent) => void;
}

export default function AddPostHeader({ ...rest }: Props) {
  return (
    <Header>
      <div>
        <TopButton onClick={rest.onBack}>뒤 로</TopButton>
      </div>

      <Right>
        <TopButton onClick={rest.onThumbnail}>썸네일</TopButton>
        <TopButton onClick={rest.onAddPost}>저장하기</TopButton>
      </Right>
    </Header>
  );
}
