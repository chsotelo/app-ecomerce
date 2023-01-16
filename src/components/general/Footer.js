import React from 'react';
import { Wrapper } from './../../styles/generalStyles';
import { ReactComponent as LogoSVG } from './../../icons/brand/logo.svg';
import { FooterContainer, FlexContainer, DetailsTextBoldStyled } from './styles/sFooter';
//obeter el año actual
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <Wrapper>
          <FlexContainer>
            <LogoSVG />
            <div>
              <DetailsTextBoldStyled>
                Sujetos a derechos de autor: © {year}, Beat Store
              </DetailsTextBoldStyled>
            </div>
          </FlexContainer>
        </Wrapper>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
