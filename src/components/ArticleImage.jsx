import React from 'react';

const ArticleImage = ({ hit }) => {
  const { imageUrl, title, url } = hit;
  return (
    <a className="zoom-article-image__wrapper" href={url}>
      <figure className="zoom-article-image__figure">
        <img className="zoom-article-image__img"
          src={imageUrl}
          alt={title}
          title={title}
          loading="lazy"
        />
      </figure>
    </a>
  );
}

export default ArticleImage;