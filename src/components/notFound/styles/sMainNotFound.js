import styled, { keyframes } from 'styled-components';

export const Figure = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    border-radius: 50px;
  }
`;

export const ContainerNotFound = styled.div`
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
`;
