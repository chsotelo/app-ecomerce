import styled from 'styled-components'

export const ProductContainer = styled.li`
  display: flex;
  padding: 15px;
  font-size: 0.875em;
  background: #fff;
  position: relative;
  margin: 0 0 40px 0;

  img {
    width: 25%;
    height: 25%;
    margin: 0 15px 0 0;
  }

  h3 {
    font-weight: ${props => props.theme.weight.medium};
    line-height: 1.457em;
  }

  .price {
    color: ${props => props.theme.brandColor};
    font-weight: ${props => props.theme.weight.medium};
    margin: 7px 0 0 0;
  }

  .count {
    margin: 12px 0 0 0;
  }

  svg {
    position: absolute;
    right: 15px;
    bottom: 15px;
  }
`
