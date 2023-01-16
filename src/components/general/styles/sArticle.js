import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ArticleContainer = styled(Link)`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
  transition: all .2s ease-in;
  will-change: transform, box-shadow;

  img {
    width: auto;
    height: 65px;
  }

  @media(min-width:768px) {
    padding: 25px;

    img {
      height: 105px;
    }
  }

  @media(min-width:1200px) {
    padding: 30px;

    img {
      height: 145px;
    }

    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, .15);
    }
  }
`

export const DescriptionArticleContainer = styled.div`
  h4 {
    font-size: 0.875em;
    line-height: 1.188em;
    color: ${props => props.theme.textColor};

    &:nth-child(1) {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;  
      overflow: hidden;
      font-weight: ${props => props.theme.weight.light};
      margin: 15px 0 5px 0;
    }

    &:nth-child(2) {
      font-weight: ${props => props.theme.weight.medium};
      color: ${props => props.theme.brandColor};
    }
  }

  @media(min-width:768px) {
    h4 {
      &:nth-child(1) {
        margin: 25px 0 15px 0;
      }
    }
  }

  @media(min-width:1200px) {
    h4 {
      font-size: 0.945em;
      line-height: 1.488em;

      &:nth-child(1) {
        font-weight: ${props => props.theme.weight.regular};
        margin: 25px 0 10px 0;
      }

      &:nth-child(2) {
        font-size: 0.965em;
      }
    }
  }
`
