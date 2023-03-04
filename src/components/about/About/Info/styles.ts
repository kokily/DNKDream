import styled from 'styled-components';
import { media } from '@/styles';

// Styles
const Container = styled.div`
  margin-left: 1.5rem;
  ${media.medium} {
    margin-left: 0;
    margin-top: 1.5rem;
  }
`;

const InfoHeader = styled.div`
  margin-bottom: 1rem;
  h2 {
    font-size: 1.3rem;
  }
  h4 {
    font-size: 0.8rem;
    color: #333;
  }
`;

const InfoBody = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const InfoLinks = styled.div`
  display: flex;
  ${media.medium} {
    justify-content: center;
  }
`;

const Button = styled.button`
  padding: 10px 0 10px 30px;
  width: 150px;
  margin-bottom: 15px;
  display: block;
  border: 1px solid #c2c7d0;
  border-radius: 5px;
  position: relative;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  ${media.medium} {
    min-width: 100px;
  }
  &::before {
    font-family: fontAwesome;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 22px;
    border-right: 1px solid #c2c7d0;
    padding: 0 5px;
    width: 40px;
    height: 100%;
    line-height: 40px;
  }
  &:hover {
    opacity: 0.7;
  }
  &.github {
    background-color: #333;
    &::before {
      content: '\f09b';
      font-family: fontAwesome;
    }
  }
  &.facebook {
    background-color: #3b5998;
    &::before {
      content: '\f09a';
    }
  }
`;

export { Container, InfoHeader, InfoBody, InfoLinks, Button };
