import styled from 'styled-components';

export const WrapperDuplex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto auto;
  gap: 20px;
  width: 100%;

  button {
    margin: 0;
    width: 200px;

    &:hover {
      background-color: ${(props) => props.theme.gray200Color};
    }
  }
`;

export const TitleContainerEdit = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 0 0 20px 0;

  button {
    width: 200px;
  }
`;
