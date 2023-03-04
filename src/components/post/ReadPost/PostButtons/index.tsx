import { Container } from './styles';
import Button from '@/components/common/Button';

interface Props {
  isAdmin: boolean;
  onBack: () => void;
  onEditPost: () => void;
  onRemoveClick: () => void;
}

export default function PostButtons({
  isAdmin,
  onBack,
  onEditPost,
  onRemoveClick,
}: Props) {
  return (
    <Container>
      <Button back onClick={onBack}>
        뒤로가기
      </Button>

      {isAdmin && (
        <>
          <Button upload onClick={onEditPost}>
            수정하기
          </Button>
          <Button remove onClick={onRemoveClick}>
            삭제하기
          </Button>
        </>
      )}
    </Container>
  );
}
