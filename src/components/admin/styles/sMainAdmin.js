import styled from 'styled-components';

export const ContainerAdminPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ButtonsPanelAdmin = styled.div`
  display: flex;
  width: 70%;
  flex-direction: row;
  margin: 20px 0 20px 0;
  gap: 20px;

  a {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;
