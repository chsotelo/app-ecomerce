import React from 'react';
import { DetailsProduct as DetailsCustomer, TextBodySmall, Checkbox } from '../../styles/generalComponents'

const CardCreditCard = ({ creditCardNumber, name }) => {

  const truncCard = (creditCardNumber) => {
    if(creditCardNumber != null) {
      let bloq = '********'
      let count = 6
      let newString = ''
  
      while(count < 16) {
        newString = bloq.concat(creditCardNumber[count])
        count ++
      }
  
      return newString
    }
  }

  return (
    <Checkbox>
      <label className="radiosContainerFlex__item">
        <input type="radio" defaultChecked id="creditCard" name="creditCard" />
        <span className="rCCheckmark"></span>
        <div>
          <DetailsCustomer>
            <TextBodySmall as="h4">Visa {truncCard(creditCardNumber)}</TextBodySmall>
          </DetailsCustomer>
          <DetailsCustomer>
            <TextBodySmall>{name}</TextBodySmall>
          </DetailsCustomer>
          <DetailsCustomer>
            <TextBodySmall>Expira 12/2025</TextBodySmall>
          </DetailsCustomer>
        </div>
      </label>
    </Checkbox>
  );
}

export default CardCreditCard;