import styled from 'styled-components'
import { TitleText, Input, TextBodyLarge } from './../../../styles/generalComponents'

export const ImageProductContainer = styled.div`
  height: 50vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 80%;
  }

  @media(min-width:1200px) {
    height: 400px;

    img {
      height: 300px;
    }
  }
`

export const GridOnlyDesktop = styled.div`
  display: block;

  @media(min-width:1200px) {
    margin: 20px auto 0 auto;
    width: 1100px;
    display: grid;
    grid-template-columns: calc(50% - 80px) 1fr;
    gap: 80px;
  }
`

export const TitleTextStyled = styled(TitleText)`
  font-size: 1em;
  margin: 0 0 3px 0;

  @media(min-width:1200px) {
    font-size: 1.5em;
    margin: 0 0 10px 0;
    text-align: left;
  }
`

export const TextAppreciationsStyled = styled(TitleText)`
  font-size: 1em;
  font-weight: ${props => props.theme.weight.regular};
  color: ${props => props.theme.secondaryColor};
  margin: 0 0 15px 0;

  @media(min-width:1200px) {
    text-align: left;
  }
`

export const PriceContainer = styled.div`
  margin: 0 0 10px 0;

  span {
    font-weight: ${props => props.theme.weight.medium};
    color: ${props => props.theme.brandColor};
  }
`

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InputStyled = styled(Input)`
  width: 50px;
  text-align: center;
  margin: 0 0 0 5px;

  @media(min-width:1200px) {
    width: 80px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 0 0;

  @media(min-width:1200px) {
    align-items: flex-start;
  }
`

export const TextDescriptionContainer = styled.div`
  margin: 0 0 20px 0;
`

export const TextBodyLargeStyled = styled(TextBodyLarge)`
  margin: 0 0 10px 0;
`

export const OtherDetailsContainer = styled.div`
  font-size: 0.875em;
  color: ${props => props.theme.gray800Color};

  p {
    font-weight: ${props => props.theme.weight.medium};
  }

  span {
    font-weight: ${props => props.theme.weight.regular};
  }
`
