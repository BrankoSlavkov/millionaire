import styled from 'styled-components';

export const ScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
ScreenContainer.displayName = 'ScreenContainer.styled';

export const ScreenBackground = styled.div`
  background: linear-gradient(to bottom, #0000, var(--very-dark-blue)),
    url('/assets/img/bg.jpg') center;
  background-size: cover;
  width: 100%;
`;
ScreenBackground.displayName = 'ScreenBackground.styled';
