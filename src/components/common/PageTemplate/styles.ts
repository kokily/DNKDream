import styled from 'styled-components';
import { media } from '@/styles';

const FullPage = styled.div`
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  display: flex;
  width: 1200px;
  margin-top: 56px;
  ${media.small} {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const LeftBox = styled.aside`
  flex: 1;
  height: calc(100vh - 56px);
  position: relative;
  ${media.small} {
    display: none;
  }
`;

const Main = styled.main`
  flex: 3;
  width: 500px;
  height: 100%;
  ${media.large} {
    margin-right: 10px;
  }
  ${media.small} {
    max-width: 100%;
  }
`;

const RightBox = styled.aside`
  flex: 1;
  height: calc(100vh - 56px);
  position: relative;
  ${media.xlarge} {
    display: none;
  }
`;

export { FullPage, Container, Contents, LeftBox, Main, RightBox };
