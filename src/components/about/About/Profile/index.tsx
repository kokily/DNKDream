import Image from 'next/image';
import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Image
        src="/assets/images/profile.jpg"
        alt="Develop"
        width={250}
        height={250}
        layout="responsive"
      />
    </Container>
  );
}
