import styled from 'styled-components';
import { media } from '@/styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  max-width: 100%;
  height: 36px;
  align-items: center;
  margin-right: 1rem;
  ${media.medium} {
    margin: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #c9c4c4;
  border-radius: 4px;
  padding: 0.3rem;
`;

const Content = styled.textarea`
  margin: 0;
  width: 100%;
  height: auto;
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid #c9c4c4;
  border-radius: 4px;
  min-height: 6.4rem;
  font-size: 1rem;
  line-height: 1.5;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 0.4rem;
  justify-content: flex-end;
`;

export { Container, UserInfo, InputGroup, Input, Content, ButtonBox };
