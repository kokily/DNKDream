import styled from 'styled-components';

// Styles
const Container = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  font-size: 1.2rem;
  color: black;
`;

const TagList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-left: 0;
`;

const TagItem = styled.li`
  font-weight: 500;
  color: #339af0;
  margin-left: 0.5rem;
`;

const ThumbnailBox = styled.p`
  img {
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #364fc7;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #4263eb;
`;

const Body = styled.div`
  line-height: 1.6;
  word-break: break-all;
`;

export { Container, TagList, TagItem, ThumbnailBox, Title, Body };
