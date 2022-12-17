import styled from 'styled-components';

export const RegisterFormElement = styled.form`
  max-width: 28rem;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
RegisterFormElement.displayName = 'RegisterFormElement.styled';

export const RegisterInput = styled.input`
  width: 100%;
  padding: 0.3rem 1rem;
  outline: none;
  border: 2px solid var(--blue);
  border-radius: 4px;
  font-size: 2.4rem;
  font-family: var(--font-ubuntu);
  color: var(--very-dark-blue);
`;
RegisterInput.displayName = 'RegisterInput.styled';

export const PlayButton = styled.button`
  width: 100%;
  font-size: 1.4rem;
  font-family: var(--font-ubuntu);
  color: #fff;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  background: linear-gradient(
    to bottom,
    var(--very-dark-blue),
    var(--dark-blue)
  );

  &:hover {
    opacity: 0.9;
  }
`;
PlayButton.displayName = 'PlayButton.styled';
