import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  width: 100%;
  margin: 15px 0;
  flex-direction: row;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  height: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  img {
    width: auto;
    height: 120px;
  }

  @media (max-width: 768px) {
    width: auto;
    height: auto;
    align-items: center;
    img {
      width: 200px;
      height: auto;
    }
  }
`;

export const TextCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
  width: 100%;
  padding: 10px;
  text-align: justify;
  font-size: 0.8em;
  p {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 0.8em;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  right: 0;
  width: 100%;
  font-size: 0.8em;

  span {
    color: #000;
    font-weight: bold;
    font-size: 1em;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
  margin-top: 10px;
  gap: 20px;

  button {
    width: 150px;
    font-size: 0.8em;
    height: 30px;

    &:hover {
      background-color: green !important;
      border-color: green !important;
      color: #fff !important;
    }
  }
`;
