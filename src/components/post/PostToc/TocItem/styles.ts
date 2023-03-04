import styled, { css } from 'styled-components';

const ItemContainer = styled.div`
  font-size: 0.9rem;
  line-height: 2.2;
  transition: 0.2s all;
`;

const ItemActiveLink = styled.a<{ active: boolean }>`
  &:hover {
    color: #20c997;
  }
  ${(props) =>
    props.active &&
    css`
      color: #38d9a9;
      transform: scale(1.2);
    `}
`;

export { ItemContainer, ItemActiveLink };
