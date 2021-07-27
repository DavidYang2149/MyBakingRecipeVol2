import React from 'react';

import { theBaseImageURL } from 'src/utils/static';

import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="theNotFoundModal">
      <img
        className="theNotFoundImage"
        src={`${theBaseImageURL}assets/images/page-not-found.svg`}
        alt="recipe"
      />
      <p className="theNotFoundTitle">
        해당 페이지를 찾을 수 없습니다.
      </p>
    </div>
  );
};

export default NotFound;
