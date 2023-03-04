import Link from 'next/link';
import { Button, Container, InfoBody, InfoHeader, InfoLinks } from './styles';

export default function Info() {
  return (
    <Container>
      <InfoHeader>
        <h2>Hyunsung Kim</h2>
        <h4>@kokily</h4>
      </InfoHeader>

      <InfoBody>
        I&apos;m not a Developer, but my hobby is development, mostly front-end
      </InfoBody>

      <InfoLinks>
        <Link href="https://github.com/kokily" passHref={true}>
          <Button className="github">Github</Button>
        </Link>
        <Link href="https://facebook.com/hkkokily5" passHref={true}>
          <Button className="facebook">FaceBook</Button>
        </Link>
      </InfoLinks>
    </Container>
  );
}
