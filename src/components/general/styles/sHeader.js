import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.headerBackgroundColor};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;

  svg {
    fill: ${(props) => props.theme.textColor};
  }

  @media (min-width: 1024px) {
    height: 58px;
  }

  @media (min-width: 1200px) {
    height: 58px;

    .logoIcon {
      width: 85px;
    }
  }
`;

export const MenuDesktopContainer = styled.div`
  @media (min-width: 1200px) {
    display: flex !important;
    width: 100%;
    justify-content: flex-end;
    align-items: center;

    .counnter-cart {
      display: flex;
      justify-content: center;
      align-items: center;
      background: orange;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      color: white;
      border: 1px solid white;
      //letra negrita
      font-weight: 700;
    }
  }
`;
