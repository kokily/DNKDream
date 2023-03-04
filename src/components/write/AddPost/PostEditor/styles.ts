import styled from 'styled-components';

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background: #495057;
  border: none;
  outline: none;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  padding: 0.5rem;
  border-bottom: 0.2px solid #868e96;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const CodeEditor = styled.div`
  flex: 1;
  background: #212529;
  display: flex;
  flex-direction: column;
  .CodeMirror {
    font-size: 1.25rem;
    flex: 1;
    line-height: 1.5;
    pre {
      max-width: calc(100vw - 50%);
      word-break: break-all;
    }
  }
`;

export { Body, Input, CodeEditor };
