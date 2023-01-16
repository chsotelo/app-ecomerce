import React from 'react';
import { DetailsProduct as DetailsCustomer, TextBodySmall, Checkbox } from '../../styles/generalComponents'

const CardAddress = ({ address, name, lastName, phoneNumber, postalCode, state, city }) => {
  console.log(address)
  return (
    <Checkbox>
      <label className="radiosContainerFlex__item">
        <input type="radio" defaultChecked id="creditCard" name="creditCard" />
        <span className="rCCheckmark"></span>
        <div>
          <DetailsCustomer>
            <TextBodySmall as="h4">{name} {lastName}</TextBodySmall>
          </DetailsCustomer>
          <DetailsCustomer>
            <TextBodySmall>{address}</TextBodySmall>
          </DetailsCustomer>
          <DetailsCustomer>
            <TextBodySmall>{city}, {state}, {postalCode}</TextBodySmall>
          </DetailsCustomer>
          <DetailsCustomer>
            <TextBodySmall>Perú</TextBodySmall>
          </DetailsCustomer>
          <DetailsCustomer>
            <TextBodySmall>Número telefónico: {phoneNumber}</TextBodySmall>
          </DetailsCustomer>
        </div>
      </label>
    </Checkbox>
  );
}

export default CardAddress;
