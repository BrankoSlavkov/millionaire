import styled from 'styled-components';

export const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    font-size: 8rem;
    font-weight: 700;
    letter-spacing: 1rem;
  }
`;
CenterContainer.displayName = 'CenterContainer.styled';
