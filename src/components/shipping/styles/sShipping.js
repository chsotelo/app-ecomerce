import styled from 'styled-components'

/* MainShippingCreditCard */

export const PromotionSecurityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 30px 0;

  svg {
    margin: 0 10px 0 0;
  }

  p {
    font-weight: ${props => props.theme.weight.light};
  }
`
