import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Wrapper } from './../../../styles/generalStyles'
import DegradeOne from './../../../images/degradeOne.png'

export const CoverPageContainer = styled.div`
  height: 300px;
  background: linear-gradient(137.6deg, #FF469F 5.79%, #804DD2 93.89%);
  background-image: url(${DegradeOne});
  background-size: cover;
  background-position-y: 40%;
  background-position-x: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
  }

  @media(min-width:768px) {
    height: 500px;

    img {
      width: 450px;
    }
  }

  @media(min-width:1024px) {
    height: 425px;
    background-position-y: 45%;

    img {
      width: 650px;
    }
  }
`

export const ListCategoriesContainer = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 1px 0 10px 0;

  @media(min-width:1200px) {
    justify-content: center;
  }
`

export const LinkStyled = styled(Link)`
  margin: 20px 0 0 0;
  display: block;
  font-size: 0.875em;
  line-height: 1.188em;
  color: ${props => props.theme.secondaryColor};

  &:hover {
    text-decoration: underline;
  }

   @media(min-width:1200px) {
      margin: 40px 0 0 0;
      text-align: center;
      font-size: 0.985em;
  }
`

const CategorySecondMixin = css`
  ${props => props.categorySecond && css`
    padding: 0 0 50px 0;
    margin: 50px auto 0 auto;
    width: 1100px;
  `}
`

export const SectionDelivery = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto !important;

  svg {
    flex: 0 0 auto;
    margin: 0 20px 0 0;
    height: auto;
  }

  ${props => props.categorySecond && css`
    margin: 40px 0 0 0;
    padding: 0 15px 40px 15px;
    border-bottom: 5px solid ${props => props.theme.gray200Color};

    h3 {
      margin: 0 0 7px 0;
    }
  `}

  ${CategorySecondMixin}

  @media(min-width:1200px) {
    width: 1100px !important;

    svg {
      margin: 0 40px 0 0;
      width: 120px;
    }

    ${props => props.categorySecond && css`
      h3 {
        margin: 0 0 10px 0;
        cursor: default;
      }
    `}
  }
`

export const SectionMetodsPay = styled(Wrapper)`
  margin: 30px 0;
  width: auto !important;

  ${props => props.categorySecond && css`
    border-bottom: none;

    .containerLogos {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  `}

  ${CategorySecondMixin}

  @media(min-width:768px) {
    width: 400px !important;
  }
`
