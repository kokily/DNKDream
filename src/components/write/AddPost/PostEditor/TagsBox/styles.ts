import styled from 'styled-components';

// Tag Box Styles
const TagBoxContainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  background: #343a40;
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.125rem;
  font-weight: bold;
  p {
    margin-right: 2rem;
  }
  position: sticky;
  width: 100%;
  bottom: 0;
`;

const TagForm = styled.form`
  background: none;
  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1rem;
    background: none;
    color: rgba(255, 255, 255, 0.9);
    &::placeholder {
      color: rgba(255, 255, 255, 0.75);
    }
  }
  button {
    cursor: pointer;
    padding: 0.3rem 1rem;
    color: white;
    background: #3bc9db;
    font-weight: bold;
    border-radius: 8px;
    font-size: 1rem;
    &:hover {
      background: #99e9f2;
      color: #212529;
    }
    &:active {
      transform: translateY(3px);
    }
  }
`;

export { TagBoxContainer, TagForm };
