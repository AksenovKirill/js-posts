import React from 'react';
import {getPagesArray} from '../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className='page__wrapper' style={{color: 'transparent', border: 'none'}}>
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
