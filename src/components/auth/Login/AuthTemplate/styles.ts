import styled from 'styled-components';
import { shadow } from '@/styles';

const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: 0.5s ease-out 0s 1 fadeIn;
  ${shadow(1)};
`;

const Logo = styled.div`
  background: #22b8cf;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.a`
  color: white;
  font-size: 2.4rem;
  font-weight: 800;
  text-decoration: none;
`;

export { Container, Logo, Text };
