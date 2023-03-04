import styled from 'styled-components';
import { media, shadow } from '@/styles';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2.1rem;
  ${media.medium} {
    padding-right: 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #5c7cfa;
  ${media.medium} {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: bold;
    color: #8c8585;
  }
`;

const Share = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.2px solid #208774;
  border-radius: 50%;
  height: 100%;
  padding: 5px;
  transition: 0.12s all;
  cursor: pointer;
  &:hover {
    border: 1.2px solid #dfdfdf;
  }
  &:active {
    transform: translateY(2px);
  }
`;

const TagBox = styled.div`
  .tag {
    display: inline-block;
    font-size: 1.1rem;
    font-weight: 600;
    color: #1098ad;
    margin-right: 0.5rem;
    cursor: pointer;
    transition: 0.2s all;
    &:hover {
      color: #3bc9db;
    }
    ${media.medium} {
      font-size: 1rem;
    }
  }
`;

const ThumbnailBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1.215rem;
  img {
    width: 100%;
    max-width: 650px;
    height: auto;
    filter: sepia(40%);
    border: 1px solid white;
    border-radius: 4px;
    padding: 5px;
    ${shadow(2)};
    ${media.medium} {
      width: 100% !important;
    }
  }
`;

export { Container, Title, SubTitle, Share, TagBox, ThumbnailBox };
