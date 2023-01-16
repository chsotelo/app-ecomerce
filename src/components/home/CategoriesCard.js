import React from 'react';
import { CategorySvgContainer, LinkStyled, CategoryItem } from './styles/sCategoriesCard'
import { TextBodyCategory } from './../../styles/generalComponents'

const CategoriesCard = ({ icon, color, title, link }) => {
  return (
    <CategoryItem>
      <LinkStyled to={`/category/${link}`}>
        <CategorySvgContainer color={color}>
          {icon}
        </CategorySvgContainer>
        <TextBodyCategory as="h3">{title}</TextBodyCategory>
      </LinkStyled>
    </CategoryItem>
  );
}

export default CategoriesCard;
