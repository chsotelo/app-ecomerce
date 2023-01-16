import React from 'react';
import { Link } from 'react-router-dom'
import { HeaderContainer, FlexContainer } from './styles/sHeader'
import { Wrapper } from './../../styles/generalStyles'

const HeaderSecondary = () => {
  return (
    <header>
      <HeaderContainer>
        <Wrapper>
          <FlexContainer>
            Secondary header
          </FlexContainer>
        </Wrapper>
      </HeaderContainer>
    </header>
  );
}

export default HeaderSecondary;
