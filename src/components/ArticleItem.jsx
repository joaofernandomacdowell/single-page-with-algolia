import React from 'react';

import ArticleImage from './ArticleImage';
import ArticleTag from './ArticleTag';
import ArticleTitle from './ArticleTitle';
import ArticleSubtitle from './ArticleSubtitle';
import ArticleAuthor from './ArticleAuthor';

const ArticleItem = ({ hit }) => (
  <div className="zoom-article-item__wrapper zoom-article-item__position" key={`hit-${hit.id}`}>
    <ArticleImage hit={hit} />
    <div className="zoom-article-item__description">
      <ArticleTag tags={hit.tags} url={hit.url} />
      <a href={hit.url}>
        <ArticleTitle title={hit.title} />
        <ArticleSubtitle subtitle={hit.subtitle} />
        <ArticleAuthor author={hit.author} />
      </a>
    </div>
  </div>
);

export default ArticleItem;