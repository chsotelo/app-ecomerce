import styled, { css } from 'styled-components'
import { DetailsText } from './../../../styles/generalComponents'
import DegradeThree from './../../../images/degradeThree.png'
import DegradeTwo from './../../../images/degradeTwo.png'
import Laptop from './../../../images/laptops.png'
import Professional from './../../../images/professionals.png'
import Reproductor from './../../../images/reproductors.png'
import Smarthphone from './../../../images/smarthphones.png'
import Speaker from './../../../images/speakers.png'

export const CoverPageContainer = styled.div`
  height: 200px;
  background: linear-gradient(137.6deg, #46BCFF 5.79%, #4DD272 93.89%);
  background-size: cover;
  background-position-y: 40%;
  background-position-x: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.backgroundColor};

  h2 {
    display: block;
    width: 200px;
    text-align: center;
    font-size: 1.5em;
    padding: 0 0 10px 0;
    border-bottom: 4px solid ${props => props.theme.backgroundColor};
    text-transform: capitalize;
  }

  ${props => props.background == 'auriculares' && css`
    background-image: url(${DegradeThree});
  `}

  ${props => props.background == 'altavoces' && css`
    background-image: url(${Speaker});
  `}

  ${props => props.background == 'reproductores' && css`
    background-image: url(${Reproductor});
  `}

  ${props => props.background == 'laptops' && css`
    background-image: url(${Laptop});
  `}
  
  ${props => props.background == 'controladores' && css`
  background-image: url(${DegradeTwo});
  `}

  ${props => props.background == 'smarthphones' && css`
    background-image: url(${Smarthphone});
  `}

  ${props => props.background == 'profesional' && css`
    background-image: url(${Professional});
  `}

  @media(min-width:768px) {
    height: 300px;

    h2 {
      font-size: 1.85em;
      width: 300px;
    }
  }

  @media(min-width:1024px) {
    background-position-y: 45%;

    h2 {
      font-size: 2.5em;
    }
  }
`

export const DetailsTextStyled = styled(DetailsText)`
  margin: -7px 0 20px 0;
  color: ${props => props.theme.gray800Color};
`
