import React from 'react';
import article from './article.jpg'
import { ArticleContainer, DescriptionArticleContainer } from './styles/sArticle'

const Article = ({img, price, title, description, mark, color, stock, weight, productId}) => {
  return (
    <li>
      <ArticleContainer to={`/product/${productId}`}>
        <img src={img} alt={title} />
        <DescriptionArticleContainer>
          <h4>{title}</h4>
          <h4>PEN <span>{price}</span><span className="priceDecimal">.90</span></h4>
        </DescriptionArticleContainer>
      </ArticleContainer>
    </li>
  );
}

export default Article;
