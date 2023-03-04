import styled from 'styled-components';
import { media } from '@/styles';

// Styles
const Container = styled.div`
  display: flex;
  position: relative;
  height: 50px;
  ${media.small} {
    height: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.2rem;
  padding: 0;
  padding-top: 0.3rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-transform: uppercase;
  font-size: 1.215rem;
  font-weight: bold;
  background: #2ab8bd;
  color: white;
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
  top: 0;
  height: 100%;
  margin-right: 10px;
  align-items: center;
  cursor: pointer;
  ${media.small} {
    flex-direction: column;
    position: relative;
    button {
      margin-bottom: 5px;
    }
  }
  button + button {
    margin-left: 0.5rem;
    ${media.small} {
      margin: 0;
    }
  }
`;

const EditBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Input = styled.input`
  width: 100%;
  height: 36px;
  border: 1px solid #c4c0c0;
  border-radius: 6px;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`;

export { Container, Avatar, InfoBox, RightBox, EditBox, Input };
