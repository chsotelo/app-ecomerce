import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryContainer = styled(Link)`
  display: none;

  @media (min-width: 1200px) {
    display: block;
    padding: 10px 30px;
    background: ${(props) => props.theme.headerBackgroundColor};
    border-radius: 50px;
    margin: 0 20px 0 0;
    color: ${(props) => props.theme.textColor};
    transition: all 0.2s;

    &:hover {
      background: #e9e9f1;
    }
    &:active {
      background: red;
    }
    &:focus {
      background: red;
    }
  }
`;

export const NavContainer = styled.nav`
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    margin: 15px 0;
  }
`;
