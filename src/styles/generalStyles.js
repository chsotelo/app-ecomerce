import styled, { css } from 'styled-components';

const CategoryMixin = css`
  margin: 30px 0 0 0;
  padding: 0 15px 30px 15px;

  @media (min-width: 768px) {
    margin: 40px 0 0 0;
    padding: 0 10% 40px 10%;
  }

  @media (min-width: 1024px) {
    padding: 0 15% 40px 15%;
  }

  @media (min-width: 1200px) {
    padding: ${(props) => props.padding || '0 0 50px 0'};
    margin: ${(props) => props.margin || '50px auto 0 auto'};
    width: ${(props) => props.width || '1100px'};
  }
`;

export const Wrapper = styled.div`
  padding: 0 15px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 10%;
  }

  @media (min-width: 1024px) {
    padding: 0 15%;
  }

  @media (min-width: 1200px) {
    padding: 0;
    margin: ${(props) => props.margin || '0 auto'};
    width: ${(props) => props.width || '1100px'};
  }

  ${(props) =>
    props.wrapper20 &&
    css`
      padding: 20px 15px 0 15px;
    `}

  ${(props) =>
    props.category &&
    css`
      ${CategoryMixin}
      border-bottom: 5px solid ${(props) => props.theme.gray200Color};
    `}

  ${(props) =>
    props.categoryNotLineBottom &&
    css`
      ${CategoryMixin}
      border-bottom: none;
    `}

  ${(props) =>
    props.secondaryWrapper &&
    css`
      margin: 20px 0 0 0;
      padding: 0 15px 30px 15px;
      border-bottom: 5px solid ${(props) => props.theme.gray200Color};
    `}

  ${(props) =>
    props.secondaryWrapperNotLineBottom &&
    css`
      padding: 20px 15px 30px 15px;
      border-bottom: none;
    `}
`;
