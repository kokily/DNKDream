import styled from 'styled-components';

const MenuContainer = styled.div`
  display: block;
  color: inherit;
  text-decoration: none;
  background: #313131;
  overflow: hidden;
`;

const Item = styled.div`
  padding: 0.75rem 1rem;
  line-height: 1.5;
  color: #cdcdcd;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    color: white;
    background: #464646;
  }
`;

// Menu Button Styles
const MenuButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;

export { MenuContainer, Item, MenuButtonContainer };
