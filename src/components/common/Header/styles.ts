import styled from 'styled-components';
import { media, shadow } from '@/styles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #353535;
  position: fixed;
  ${shadow(1)}
  z-index: 9999;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  height: 56px;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  ${media.medium} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Logo = styled.a`
  font-size: 1.4rem;
  font-family: 'Rajdhani';
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
  transition: 0.2s all;
  &:hover {
    color: #bbe7d5;
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

export { Container, Contents, Logo, Spacer };
