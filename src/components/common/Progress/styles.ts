import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 4px;
  background-color: #818584;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
`;

const Contents = styled.div`
  height: 100%;
  background-color: #409d92;
`;

export { Container, Contents };
