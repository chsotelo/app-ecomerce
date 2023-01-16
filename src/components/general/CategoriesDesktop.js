import React from 'react';
import listCategories from './../home/categories'
import { Wrapper } from './../../styles/generalStyles'
import { CategoryContainer, NavContainer } from './styles/sCategoriesDesktop'

const CategoriesDesktop = () => {
  return (
    <Wrapper>
      <NavContainer>
        {
          listCategories.map((categories) => <Category key={categories.id} {...categories} />)
        }
      </NavContainer>
    </Wrapper>
  );
}

const Category = ({ title, link }) => {
  return (
    <CategoryContainer to={`/category/${link}`}>
      {title}
    </CategoryContainer>
  )
}

export default CategoriesDesktop;
