import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  background: ${props => props.theme.headerBackgroundColor};
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;

  svg {
    fill: ${props => props.theme.textColor};
  }

  @media(min-width:1024px) {
    height: 58px;
  }

  @media(min-width:1200px) {
    height: 58px;

    .logoIcon {
      width: 85px;
    }
  }
`

export const MenuDesktopContainer = styled.div`
  @media(min-width:1200px) {
    width: 100px;
    display: flex !important;
    justify-content: space-between;
  }
`
