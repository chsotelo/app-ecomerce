import styled from 'styled-components'
import { DetailsTextBold, DetailsText } from './../../../styles/generalComponents'

export const FooterContainer = styled.div`
  width: 100%;
  background: ${props => props.theme.textColor};
  color: ${props => props.theme.backgroundColor};
  margin: 20px 0 54px 0;

  @media(min-width:768px) {
    margin: 20px 0 0 0;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 170px;

  svg {
    width: 98px;
    margin: 0 0 20px 0;
    fill: ${props => props.theme.backgroundColor};
    height: auto;
  }

  @media(min-width:768px) {
    height: 190px;

    svg{
      width: 108px;
    }
  }

  @media(min-width:1200px) {
    height: 210px;

    svg{
      margin: 0 0 30px 0;
      width: 125px;
    }
  }
`

export const DetailsTextBoldStyled = styled(DetailsText)`
  text-align: center;
  display: block;
  margin: 7px 0 0 0;

  @media(min-width:1200px) {
    margin: 15px 0 0 0;
  }
`
