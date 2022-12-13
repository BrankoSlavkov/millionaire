import styled from 'styled-components';

export const TimerContainer = styled.div`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  border: 3px solid var(--blue);
  align-self: flex-end;
  margin-right: 2rem;
  background: linear-gradient(to bottom, #000, var(--dark-blue));
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.8rem;
`;
TimerContainer.displayName = 'TimerContainer.styled';
