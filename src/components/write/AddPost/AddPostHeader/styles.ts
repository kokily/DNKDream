import styled from 'styled-components';
import { shadow } from '@/styles';

const Header = styled.div`
  background: #343a40;
  height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  margin-left: auto;
`;

const TopButton = styled.button`
  font-weight: 700;
  height: 2rem;
  color: white;
  background: black;
  border: 1px solid white;
  border-radius: 10px;
  outline: none;
  padding: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    background: white;
    color: black;
    ${shadow(1)};
  }
  &:active {
    transform: translateY(3px);
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

export { Header, Right, TopButton };
