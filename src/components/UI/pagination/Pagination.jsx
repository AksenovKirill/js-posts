import React from 'react';
import {getPagesArray} from '../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className='page__wrapper'>
      {pagesArray.map((numberPage) => (
        <span
          key={numberPage}
          className={page === numberPage ? 'page page__current' : 'page'}
          onClick={() => changePage(numberPage)}>
          {numberPage}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
