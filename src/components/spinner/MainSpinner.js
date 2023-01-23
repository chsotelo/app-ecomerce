import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as LogoSVG } from './../../icons/brand/logo.svg';

const faded = keyframes`
  0% {
    opacity: .1;
    transform: scale(0.98);
  } 50% {
    opacity: 1;
    transform: scale(1.02);
  } 100% {
    opacity: .1;
    transform: scale(0.98);
  }
`;

const SpinnerContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2000;
  top: 0;
  background: ${(props) => props.theme.backgroundColor};

  svg {
    fill: ${(props) => props.theme.textColor};
    width: 108px;
    height: auto;
    animation: ${faded} 1.5s ease-in-out infinite;
  }
`;

const MainSpinner = ({ title }) => {
  return (
    <SpinnerContainer>
      <LogoSVG />
      {title}
    </SpinnerContainer>
  );
};

export default MainSpinner;
