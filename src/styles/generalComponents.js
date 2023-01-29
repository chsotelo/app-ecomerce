import styled, { css } from 'styled-components';

const DetailsTextMixin = css`
  font-size: 0.83em;
  line-height: 1.563em;
  cursor: default;

  @media (min-width: 1200px) {
    font-size: 0.85em;
  }
`;

export const TitleText = styled.h1`
  font-family: ${(props) => props.theme.primaryFont};
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: 1.678em;
  line-height: 1.345em;
  cursor: default;

  @media (min-width: 1200px) {
    font-size: 1.878em;
    text-align: center;
  }
`;

export const SubtitleTextSmall = styled.h2`
  font-weight: ${(props) => props.theme.weight.medium};
  font-size: 1.125em;
  line-height: 1.313em;
  cursor: default;

  @media (min-width: 1200px) {
    font-size: 1.175em;
  }
`;

export const TextBodyLarge = styled.p`
  font-weight: ${(props) => props.theme.weight.medium};
  font-size: 0.98em;
  line-height: 1.51em;
  cursor: default;

  @media (min-width: 1200px) {
    font-size: 1.28em;
  }
`;

export const TextBodyCategory = styled.p`
  font-weight: ${(props) => props.theme.weight.regular};
  font-size: 0.8em;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 0.82em;
  }

  @media (min-width: 1200px) {
    font-size: 0.92em;
  }
`;

export const TextBodySmall = styled.p`
  font-weight: ${(props) => props.theme.weight.light};
  font-size: 0.875em;
  line-height: 1.51em;
  cursor: default;

  @media (min-width: 1200px) {
    font-size: 0.955em;
  }
`;

export const DetailsText = styled.span`
  font-weight: ${(props) => props.theme.weight.light};
  ${DetailsTextMixin}
`;

export const DetailsTextBold = styled.span`
  font-weight: ${(props) => props.theme.weight.regular};
  ${DetailsTextMixin}
`;

const InputMixin = css`
  background: #fff;
  border: 1px solid ${(props) => props.theme.gray500Color};
  border-radius: 20px;
  padding: 10px 15px;
  color: ${(props) => props.theme.textColor};
  font-size: 0.875em;
  letter-spacing: 0.01em;
  transition: 0.2s;
  width: -webkit-fill-available;
  outline: 0;

  &:focus {
    border: 1px solid ${(props) => props.theme.brandColor + '4f'};
  }
`;

export const Input = styled.input`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '40px'};
  ${InputMixin}
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  resize: none;
  ${InputMixin}
  font-family: ${(props) => props.theme.secondaryFont};
`;

export const Select = styled.select`
  ${InputMixin}
`;

export const Option = styled.option`
  margin: 20px 10px;
`;

export const ErrorMessageInput = styled.span`
  display: block;
  color: ${(props) => props.theme.brandColor};
  line-height: 1.7em;
  font-size: 0.81em;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.brandColor};
  border-radius: 20px;
  height: 42px;
  text-transform: uppercase;
  color: ${(props) => props.theme.backgroundColor};
  border: none;
  margin: 0 auto;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
  font-weight: ${(props) => props.theme.weight.medium};
  width: 100%;
  font-size: 0.875em;
  transition: all 0.2s;

  ${(props) =>
    props.secondary &&
    css`
      border: 1px solid ${(props) => props.theme.brandColor};
      background: transparent;
      color: ${(props) => props.theme.brandColor};

      &:hover {
        border: 1px solid #ca1f2c;
        color: #ca1f2c;
        cursor: pointer;
        background: transparent !important;
      }
    `}

  ${(props) =>
    props.tertiary &&
    css`
      border: none;
      background: transparent;
      color: ${(props) => props.theme.brandColor};
      margin: 0 0 25px 0;
      font-size: 0.875em;

      &:hover {
        border: none;
        color: green;
        cursor: pointer;
        background: transparent !important;
        text-decoration: underline;
      }

      @media (min-width: 1200px) {
        padding: 0;
        height: auto;
        text-align: initial;
      }
    `}


  ${(props) =>
    props.small &&
    css`
      padding: 10px 25px;

      @media (min-width: 1200px) {
        width: auto;
        padding: 0 70px;
      }
    `}

  ${(props) =>
    props.left &&
    css`
      margin: 0;
    `}

  ${(props) =>
    props.center &&
    css`
      margin: 0 auto;
    `}

  &:hover {
    background: #ca1f2c;
    cursor: pointer;
  }
`;

/* export const ArticlesContainer = styled.section`
  margin: 30px 0;
  border-bottom: 5px solid ${props => props.theme.gray200Color};
` */

export const TitleContainer = styled.div`
  margin: 0 0 20px 0;

  ${(props) =>
    props.bottom15 &&
    css`
      margin: 0 0 15px 0;
    `}

  @media(min-width:1200px) {
    margin: 0 0 40px 0;

    ${(props) =>
      props.bottomDesktop20 &&
      css`
        margin: 0 0 20px 0;
      `}
  }
`;

export const ListArticlesContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 15px;

  @media (min-width: 768px) {
    gap: 30px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ButtonContainer = styled.div`
  margin: 0 0 30px 0;

  .label-checkbox {
    color: green;
    font-size: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  ${(props) =>
    props.center &&
    css`
      display: flex;
      flex-direction: column;
    `}
`;

export const DetailsProduct = styled.div`
  margin: 0 0 8px 0;

  &:last-child {
    margin: 0;
  }

  ${(props) =>
    props.detailsPrices &&
    css`
      display: flex;
      justify-content: space-between;
    `}
`;

export const InputContainer = styled.fieldset`
  margin: 20px 0 20px 0;
  border: none;

  label {
    display: block;
    font-size: 0.875em;
    margin: 0 0 10px 0;
  }
`;
export const InputContainerForEmail = styled.fieldset`
  margin: 0 0 20px 0;
  border: none;
  width: 100% !important;

  label {
    display: block;
    width: 100%;
    font-size: 0.875em;
    margin: 0 0 10px 0;
  }
  input {
    width: 100% !important;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 0 0 15px 0;
  background: white;
  border: 1px solid ${(props) => props.theme.gray500Color};
  border-radius: 20px;

  h4 {
    font-weight: ${(props) => props.theme.weight.medium};
  }

  .radiosContainerFlex__item {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all 0.25s;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .rCCheckmark {
      position: absolute;
      top: 50%;
      left: 0;
      height: 1.2em;
      width: 1.2em;
      background-color: white;
      border-radius: 50%;
      border: 1px solid ${(props) => props.theme.gray500Color};
      transition: all 0.25s;
    }

    &:hover input ~ .rCCheckmark {
      background-color: #0000005c;
      border: 1px solid ${(props) => props.theme.brandColor};
    }

    & input:checked ~ .rCCheckmark {
      background-color: ${(props) => props.theme.brandColor};
    }

    .rCCheckmark:after {
      content: '';
      display: none;
      position: absolute;
    }

    & input:checked ~ .rCCheckmark:after {
      display: block;
    }

    & .rCCheckmark:after {
      top: 18%;
      left: 15%;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: white;

      @media (min-width: 768px) {
        top: 2px;
        left: 2.4px;
        width: 12px;
        height: 12px;
      }
    }
  }
`;
