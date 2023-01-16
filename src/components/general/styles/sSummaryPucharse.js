import styled, { css } from 'styled-components'
import { TextBodySmall, DetailsProduct } from './../../../styles/generalComponents'

export const TextBodySmallStyled = styled(TextBodySmall)`
  ${props => props.wMediumDetailsPrice && css`
    font-weight: ${props => props.theme.weight.medium};

    span {
      font-weight: ${props => props.theme.weight.light};
    }
  `}
`

export const DetailsContainer = styled.div`
  margin: 0 0 40px 0;
`

export const DetailsProductStyled = styled(DetailsProduct)`
  margin: 15px 0 0 0;

  ${props => props.wboldDetailsPrice && css`
    p {
      font-weight: ${props => props.theme.weight.bold};
    }
  `}
`
