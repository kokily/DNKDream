import styled from 'styled-components';
import { media } from '@/styles';

const TagContainer = styled.span`
  display: inline-block;
  border: 1px solid #408ac3;
  border-radius: 15px;
  padding: 5px 10px;
  margin-bottom: 5px;
  background: #408ac3;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  transition: 0.2s all;
  margin-left: 0.7rem;
  margin-right: 4px;
  &:hover {
    color: #408ac3;
    background-color: #fff;
  }
  ${media.small} {
    margin-left: 0px;
  }
`;

export { TagContainer };
