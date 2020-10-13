import React from 'react';

import ArticleFilter from './ArticleFilter'

const Header = (props) => {
  return (
    <div className="zoom-header">
      <div className="zoom-header__logo">
        <a href="https://wwww.zoom.com.br" aria-label="Ir a Home">
          <img src="https://s.zst.com.br/web/img/themes/logo-white.svg" alt="" className="zoom-header__logo__img" />
        </a>
      </div>
      <div className="zoom-header__searchbox">
        {props.children}
      </div>
      <ArticleFilter
        isClosed={props.isClosed}
        setClose={props.setClose}
      />
    </div>
  );
};

export default Header;