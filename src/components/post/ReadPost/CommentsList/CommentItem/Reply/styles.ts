import styled from 'styled-components';
import { media } from '@/styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
  padding-left: 4.1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  ${media.small} {
    padding-left: 3rem;
  }
`;

export { Container };
