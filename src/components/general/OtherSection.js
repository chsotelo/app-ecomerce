import React from 'react';
import { Wrapper } from './../../styles/generalStyles'
import { TitleText, TitleContainer } from './../../styles/generalComponents'

const OtherSection = (props) => {
  return (
    <Wrapper categoryNotLineBottom>
      <TitleContainer>
        <TitleText>{props.titleSection}</TitleText>
      </TitleContainer>
      {props.children}
    </Wrapper>
  );
}

export default OtherSection;
