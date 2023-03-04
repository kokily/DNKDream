import { Container, Contents, ButtonGroup } from './styles';
import Button from '../Button';

interface Props {
  visible: boolean;
  title: string;
  content: string | React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function Modal({ ...rest }: Props) {
  if (!rest.visible) return null;

  return (
    <Container>
      <Contents>
        <h2>{rest.title}</h2>
        <p>{rest.content}</p>

        <ButtonGroup>
          <Button remove onClick={rest.onCancel}>
            취소
          </Button>
          <Button submit onClick={rest.onConfirm}>
            확인
          </Button>
        </ButtonGroup>
      </Contents>
    </Container>
  );
}
