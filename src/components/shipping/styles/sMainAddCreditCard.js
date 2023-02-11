import styled from 'styled-components';

export const CardPageContainer = styled.div`
  color: white;

  .title {
    font-size: 1.5rem;
    margin: 0 0 60px 0;
  }

  .numberCard {
    color: #d3d2d4;
    font-size: 1.9rem;
    letter-spacing: 0.3rem;
  }

  .container-date {
    color: #d3d2d4;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 20px 0 0 0;
  }

  .nameDateCard {
    width: min-content;
    margin: 0 20px 0 0;
    font-size: 10px;
    color: #d3d2d4;
  }
  .nameCard {
    color: #d3d2d4;
    margin: 20px 0 0 0;
  }
`;

export const ContainerInCard = styled.div`
  display: flex;
  gap: 20px;
`;
