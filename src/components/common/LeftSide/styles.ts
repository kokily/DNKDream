import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 14px;
  position: fixed;
  top: 56px;
`;

const Title = styled.h2`
  color: #303030;
  margin-bottom: 2rem;
`;

const CategoryItem = styled.div`
  margin-bottom: 1.5rem;
  font-size: 16px;
  font-weight: bold;
  color: #7f7f7f;
  cursor: pointer;
  transition: 0.4s color;
  &:hover {
    color: #31c598;
  }
  &.active {
    color: #0c0c0c;
  }
`;

const CopyRight = styled.div`
  height: 120px;
  font-size: 20px;
  font-weight: bold;
  color: #1b7e94;
`;

export { Container, Title, CategoryItem, CopyRight };
