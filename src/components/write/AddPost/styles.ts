import styled, { createGlobalStyle } from 'styled-components';
import { media } from '@/styles';

const WriteGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
    background: #ced4da;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const Areas = styled.div`
  height: calc(100vh - 4rem);
  display: flex;
  position: relative;
`;

const Area = styled.div`
  display: flex;
  min-width: 0;
  overflow: auto;
  ${media.medium} {
    &.content {
      flex: 1 !important;
    }
    &.preview {
      display: none;
    }
  }
`;

const Divide = styled.div`
  width: 1rem;
  height: 100%;
  position: absolute;
  transform: translate(calc(50vw - 0.5rem));
  cursor: col-resize;
  ${media.medium} {
    display: none;
  }
`;

export { WriteGlobalStyle, Areas, Area, Divide };
