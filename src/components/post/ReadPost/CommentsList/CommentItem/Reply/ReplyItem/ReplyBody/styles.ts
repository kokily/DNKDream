import styled from 'styled-components';

const Body = styled.pre`
  margin-left: 1.4rem;
  padding: 0.5rem;
  word-break: keep-all;
  font-size: 1rem;
  line-height: 1.6;
  border-radius: 8px;
  white-space: normal;
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

export { Body, UpdateBody };
