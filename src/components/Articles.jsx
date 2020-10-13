import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Pagination,
  connectHits,
} from 'react-instantsearch-dom';

import ArticleItem from './ArticleItem';
import ArticleFilter from './ArticleFilter';
import Header from './Header';


const APP_ID = process.env.REACT_APP_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

const searchClient = algoliasearch(APP_ID, API_KEY);

const renderHits = (hits) =>
  hits ? hits.map(hit => <ArticleItem hit={hit} key={hit.id} />) : null;

const ArticleItems = ({ hits }) => (
  <div className="zoom-articles-container">
    {renderHits(hits)}
  </div>
);

const CustomHits = connectHits(ArticleItems);

const Articles = () => {
  const [isClosed, setClose] = useState(true);

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="challenge_article_v2_items">
    <Header>
      <SearchBox translations={{ placeholder: 'Digite sua busca...'}} />
      <ArticleFilter isClosed={isClosed} setClose={setClose} />
    </Header>
    <CustomHits />
    <Pagination
      showFirst={false}
    />
    </InstantSearch>
  );
};

export default Articles;