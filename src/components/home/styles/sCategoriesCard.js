import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const moving = keyframes`
  0% {
    transform: rotate(0deg)
  }
  20% {
    transform: rotate(8deg)
  }
  70% {
    transform: rotate(-8deg)
  }
  100% {
    transform: rotate(0deg)
  }
`

export const CategoryItem = styled.li`
  will-change: transform;
  transition: all .2s;

  &:nth-child(n) {
    margin: 0 25px 0 0;
  }

  &:last-child {
    margin: 0;
  }

  &:hover svg {
    animation: ${moving} .75s ease-in-out;
  }

  @media(min-width:768px) {
    &:nth-child(n) {
      margin: 0 35px 0 0;
    }
  }

  @media(min-width:1200px) {
    &:nth-child(n) {
      margin: 0 55px 0 0;
    }

    &:last-child {
      margin: 0;
    }
  }
`

export const LinkStyled = styled(Link)`
  display: block;
  width: min-content;
  color: ${props => props.theme.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CategorySvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.color};
  border-radius: 50%;
  width: 55px;
  height: 55px;
  margin: 0 0 7px 0;

  svg {
    width: 25px;
    height: 25px;
  }

  @media(min-width:768px) {
    margin: 0 0 10px 0;
    width: 58px;
    height: 58px;

    svg {
      width: 28px;
      height: 28px;
    }
  }

  @media(min-width:1200px) {
    margin: 0 0 20px 0;
    width: 75px;
    height: 75px;

    svg {
      width: 35px;
      height: 35px;
    }
  }
`
