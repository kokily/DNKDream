import styled from 'styled-components';

const InputGroupContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

const InputGroupLabel = styled.label`
  position: absolute;
  color: #212529;
  top: 12px;
  left: 0;
  transition: 0.2s ease all;
`;

const InputGroupBar = styled.span`
  position: relative;
  display: block;
  width: 100%;
  &:before {
    content: '';
    position: absolute;
    background: #0c8599;
    height: 3px;
    left: 50%;
    right: 50%;
    bottom: 0;
    transition: left 0.2s ease-out, right 0.2s ease-out;
  }
`;

export { InputGroupContainer, InputGroupLabel, InputGroupBar };
