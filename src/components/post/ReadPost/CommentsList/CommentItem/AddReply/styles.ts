import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
  padding-top: 1rem;
`;

const AddBox = styled.textarea`
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

export { Container, AddBox, ButtonBox };
