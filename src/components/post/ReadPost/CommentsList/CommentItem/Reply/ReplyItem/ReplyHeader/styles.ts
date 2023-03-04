import styled from 'styled-components';
import { media } from '@/styles';

const Header = styled.div`
  display: flex;
  position: relative;
  height: 50px;
  ${media.small} {
    height: 100%;
    align-items: center;
  }
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.2rem;
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-transform: uppercase;
  font-size: 1.215rem;
  font-weight: bold;
  background: #2ab8bd;
  color: white;
  img {
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0;
  .name {
    font-weight: bold;
    margin-bottom: 0.2rem;
  }
  .date {
    color: #9e9e9e;
  }
`;

const RightBox = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: -15px;
  height: 100%;
  align-items: center;
  cursor: pointer;
  ${media.small} {
    flex-direction: column;
    button {
      margin-bottom: 5px;
    }
  }
  button + button {
    margin-left: 5px;
    ${media.small} {
      margin: 0;
    }
  }
`;

export { Header, Avatar, InfoBox, RightBox };
