import React from 'react';

const ArticleTag = ({ tags, url }) => {
  const mainTag = tags[0];
  const taghref = url.substring(0, url.lastIndexOf('/'));

  return (
    <a className="zoom-article-tag" href={taghref}>
      {mainTag}
    </a>
  );
}

export default ArticleTag;