import styled, { css } from 'styled-components';

const activeStyles = css`
  background-color: var(--green);
`;

export const AsideContainer = styled.aside`
  max-width: 25%;
  flex: 1;
  background-color: var(--very-dark-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 300;
`;
AsideContainer.displayName = 'AsideContainer.styled';

export const AsideList = styled.ul`
  height: 100%;
  max-width: 28rem;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10rem 0;
`;
AsideList.displayName = 'AsideList.styled';

type ListItemStyledProps = {
  isActive?: boolean;
};

export const ListItemStyled = styled.li<ListItemStyledProps>`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 3px 1rem;
  border-radius: 10px;
  user-select: none;

  ${({ isActive }) => isActive && activeStyles}

  &:nth-child(5n) {
    color: var(--yellow);
  }
`;
ListItemStyled.displayName = 'ListItemStyled.styled';

export const Price = styled.span`
  flex: 1;
  text-align: right;
`;
Price.displayName = 'Price.styled';
