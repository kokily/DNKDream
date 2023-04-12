import { Container, Contents } from './styles';
import useProgress from './useProgress';

export default function Progress() {
  const hooks = useProgress();

  return (
    <Container ref={hooks.progressRef} onClick={hooks.handleProgress}>
      <Contents style={{ width: hooks.width + '%' }} />
    </Container>
  );
}
