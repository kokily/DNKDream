import styled from 'styled-components';
import { media } from '@/styles';

// Posts Styles
const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1rem;
`;

const TagBox = styled.div`
  display: flex;
  margin-bottom: 1.4rem;
`;

const Tag = styled.div`
  border: 1px solid #1c68cb;
  border-radius: 15px;
  padding: 5px 10px;
  background: #1c68cb;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  transition: 0.2s all;
  span {
    display: none;
    margin-left: 0.5rem;
  }
  &:hover {
    color: #1c68cb;
    background-color: #fff;
    span {
      display: inline-block;
    }
  }
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  span {
    display: none;
    margin-left: 0.4rem;
    font-size: 8px;
  }
  &:hover {
    span {
      display: inline-block;
    }
  }
`;

const CategoryLink = styled.div`
  padding-top: 0.2rem;
  cursor: pointer;
  color: #1c7ed6;
  &:hover {
    color: #1971c2;
    font-weight: bold;
  }
`;

// Post Card Styles
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3rem;
  transition: 0.4s color;
  cursor: pointer;
  &:hover {
    h2 {
      color: #423ec8;
    }
    img {
      filter: brightness(100%);
    }
  }
  h2 {
    margin-top: 6px;
    cursor: pointer;
    small {
      font-size: 0.95rem;
      color: #2040a9;
    }
  }
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 360px;
  margin: 0;
  border: none;
  img {
    filter: brightness(95%);
  }
  ${media.small} {
    height: auto;
  }
`;

const CardTagBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  ${media.small} {
    margin-top: 0;
  }
`;

const CardTag = styled.div`
  border: 1px solid #35d3b1;
  border-radius: 15px;
  padding: 5px 10px;
  margin-bottom: 5px;
  background: #35d3b1;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  transition: 0.2s all;
  &:hover {
    color: #35d3b1;
    background-color: #fff;
  }
  margin-right: 5px;
  ${media.small} {
    margin-left: 0;
  }
`;

const DateBox = styled.div`
  margin-top: 14px;
  color: #808080;
`;

export {
  Container,
  TagBox,
  Tag,
  CategoryBox,
  CategoryLink,
  CardContainer,
  Thumbnail,
  CardTagBox,
  CardTag,
  DateBox,
};
