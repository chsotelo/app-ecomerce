import React from 'react';
import { Wrapper } from './../../styles/generalStyles'
import { TitleText, TitleContainer } from './../../styles/generalComponents'

const Section = (props) => {
  return (
    <Wrapper category>
      <TitleContainer>
        <TitleText>{props.titleSection}</TitleText>
      </TitleContainer>
      {props.children}
    </Wrapper>
  );
}

export default Section;
