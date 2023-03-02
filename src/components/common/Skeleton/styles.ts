import styled from 'styled-components';

const SkeletonContainer = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  animation: skeleton-loading 0.4s linear infinite alternate;
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

export { SkeletonContainer };
