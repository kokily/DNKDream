import styled from 'styled-components';
import { media } from '@/styles';

const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 4.5rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  ${media.medium} {
    margin-top: 0;
    margin-bottom: 2rem;
  }
  button + button {
    margin-left: 0.4rem;
  }
`;

export { Container };
