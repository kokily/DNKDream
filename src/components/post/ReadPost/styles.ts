import styled from 'styled-components';
import { media } from '@/styles';

const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 950px;
  border-bottom: 0.2rem outset #38d9a9;
  margin-top: 1.5rem;
  margin-bottom: 10rem auto 0px;
  ${media.medium} {
    margin-bottom: 1.5rem;
    max-width: 100%;
  }
  ${media.small} {
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const CategoryLink = styled.span`
  cursor: pointer;
  color: #1c7ed6;
  &:hover {
    color: #1971c2;
    font-weight: bold;
  }
`;

const PostContent = styled.div`
  font-size: 1.2rem;
  margin-bottom: 17rem;
  ${media.medium} {
    margin-bottom: 0;
    padding-right: 0.5rem;
  }
`;

export { PostHeader, CategoryLink, PostContent };
