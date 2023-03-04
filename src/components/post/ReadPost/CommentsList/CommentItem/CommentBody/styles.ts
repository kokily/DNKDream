import styled, { css } from 'styled-components';
import { media } from '@/styles';

// Styles
const Container = styled.pre<{ deleted?: boolean }>`
  margin-left: 4rem;
  padding: 0.5rem;
  word-break: keep-all;
  font-size: 1rem;
  line-height: 1.6;
  border-radius: 8px;
  white-space: normal;
  ${media.small} {
    margin-left: 0.5rem;
  }
  ${(props) =>
    props.deleted &&
    css`
      background: #e7e2e2;
      color: #b8a6a6;
    `}
`;

const UpdateBody = styled.textarea`
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

export { Container, UpdateBody };
