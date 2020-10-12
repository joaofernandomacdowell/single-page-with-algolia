import React, { useState } from 'react';
import { Panel, RefinementList } from 'react-instantsearch-dom';


const FILTER_OPTIONS = ['tags', 'author'];

export const ToggleButton = ({ isClosed, setClose }) => {
  return (
    <button
      className="zoom-toggle-button"
      onClick={(e) => {
        e.preventDefault();
        setClose(!isClosed);
      }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
        <path d="M15 1H1l5.6 6.3v4.37L9.4 13V7.3z"
          stroke="#fff" strokeWidth="1.29"
          fill="none" fillRule="evenodd"
          strokeLinecap="round" strokeLinejoin="round"
        >
        </path>
      </svg>
      Filters
    </button>
  );
};

const renderFilterOptions = (setAttribute) => (
  <select onChange={(e) => setAttribute(e.target.value) }>
    {FILTER_OPTIONS.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

const ArticleFilter = ({ isClosed, setClose }) => {
  const [attribute, setAttribute] = useState("tags");
  const filterClass = 'zoom-article-filter';
  const closeFilterClass = ` ${filterClass}--close`;
  const modifier = isClosed ? closeFilterClass : '';

  return (
    <>
      <ToggleButton isClosed={isClosed} setClose={setClose} />
      <div className={`${filterClass}${modifier}`}>
        <Panel header={attribute}>
          {renderFilterOptions(setAttribute)}
          <RefinementList attribute={attribute === 'tags' ? 'tags' : 'author.name'} />
        </Panel>
      </div>
    </>
  );
};

export default ArticleFilter;
