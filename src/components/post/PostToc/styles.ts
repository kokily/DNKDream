import styled from 'styled-components';

const TocContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 225px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  position: fixed;
  top: 56px;
  left: 75%;
  height: 100%;
`;

const TocContents = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%; ;
`;

const TocBox = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid #38d9a9;
  padding-left: 1rem;
`;

export { TocContainer, TocContents, TocBox };
