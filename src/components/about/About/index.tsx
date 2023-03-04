import Info from './Info';
import Profile from './Profile';
import { Card, Container } from './styles';

export default function About() {
  return (
    <Container>
      <Card>
        <Profile />
        <Info />
      </Card>
    </Container>
  );
}
